import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class PersonalWebsite_CICD_Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const projectName = 'PersonalWebsite';
    const resourceName = (name: string) => `${projectName}__${name}`;

    const deploymentBucket = new s3.Bucket(this, resourceName('DeploymentBucket'), {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
      }),
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const pipeline = new codepipeline.Pipeline(this, resourceName('CodePipeline'), {
      pipelineName: resourceName('CodePipeline'),
    })

    const codeSourceArtifact = new codepipeline.Artifact()
    const codeBuildArtifact = new codepipeline.Artifact()

    const buildProject = new codebuild.PipelineProject(this, resourceName('CodeBuild'), {
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
          build: {
            commands: ['npm run build'],
          },
        },
        artifacts: {
          'base-directory': 'dist',
          files: ['**/*'],
        },
      })
    });

    deploymentBucket.grantReadWrite(buildProject);

    pipeline.addStage({
      stageName: 'Source',
      actions: [
        new codepipeline_actions.GitHubSourceAction({
          actionName: 'Source',
          owner: 'arnaldo10cisne',
          repo: 'arnaldo10cisne.github.io',
          oauthToken: cdk.SecretValue.secretsManager('github_access_token', {
            jsonField: "githubAccessToken",
          }),
          output: codeSourceArtifact,
          branch: 'master',
        })
      ]
    })

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
