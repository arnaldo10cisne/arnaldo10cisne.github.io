import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam';

interface PersonalWebsiteCICDStackProps extends cdk.StackProps {
  serverlessStackName: string;
}

export class PersonalWebsite_CICD_Stack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props?: PersonalWebsiteCICDStackProps
  ) {
    super(scope, id, props);

    const projectName = 'PersonalWebsite';
    const resourceName = (name: string) => `${projectName}__${name}`;

    const deploymentBucket = s3.Bucket.fromBucketArn(
      this,
      resourceName('DeploymentBucket'),
      'arn:aws:s3:::arnaldocisneros.com-deployment'
    );

    const pipeline = new codepipeline.Pipeline(
      this,
      resourceName('CodePipeline'),
      {
        pipelineName: resourceName('CodePipeline'),
      }
    );

    const codeSourceArtifact = new codepipeline.Artifact();
    const codeBuildArtifact = new codepipeline.Artifact();

    const buildProject = new codebuild.PipelineProject(
      this,
      resourceName('CodeBuild'),
      {
        projectName: resourceName('CodeBuild'),
        environment: {
          buildImage: codebuild.LinuxBuildImage.STANDARD_5_0,
          computeType: codebuild.ComputeType.SMALL,
        },
        buildSpec: codebuild.BuildSpec.fromObject({
          version: 0.2,
          phases: {
            install: {
              commands: ['npm install'],
            },
            pre_build: {
              commands: ['node ./scripts/get_config/generateCloudConfig.js'],
            },
            build: {
              commands: ['npm run build'],
            },
            post_build: {
              commands: [
                'cd ./scripts/load_data',
                'pip install -r requirements.txt',
                'python load_data.py',
              ],
            }
          },
          artifacts: {
            'base-directory': 'build',
            files: ['**/*'],
          },
        }),
      }
    );

    const serverlessStackName = cdk.Stack.of(this).formatArn({
      service: 'cloudformation',
      resource: 'stack',
      resourceName: `${props?.serverlessStackName}/*`,
    });

    buildProject.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['cloudformation:DescribeStacks'],
        resources: [serverlessStackName],
      })
    );

    deploymentBucket.grantReadWrite(buildProject);

    pipeline.addStage({
      stageName: 'Source',
      actions: [
        new codepipeline_actions.GitHubSourceAction({
          actionName: 'Source',
          owner: 'arnaldo10cisne',
          repo: 'arnaldo10cisne.github.io',
          oauthToken: cdk.SecretValue.secretsManager('github_access_token', {
            jsonField: 'githubAccessToken',
          }),
          output: codeSourceArtifact,
          branch: 'master',
        }),
      ],
    });

    pipeline.addStage({
      stageName: 'Build',
      actions: [
        new codepipeline_actions.CodeBuildAction({
          actionName: 'CodeBuild',
          project: buildProject,
          input: codeSourceArtifact,
          outputs: [codeBuildArtifact],
        }),
      ],
    });

    pipeline.addStage({
      stageName: 'Deploy',
      actions: [
        new codepipeline_actions.S3DeployAction({
          actionName: 'S3Deploy',
          input: codeBuildArtifact,
          bucket: deploymentBucket,
        }),
      ],
    });

    new cdk.CfnOutput(this, 'DeploymentBucketName', {
      value: deploymentBucket.bucketName,
    });
  }
}
