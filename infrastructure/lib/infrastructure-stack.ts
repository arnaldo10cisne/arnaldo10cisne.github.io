import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class PersonalWebsiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const projectName = 'PersonalWebsite';
    const resourceName = (name: string) => `${projectName}__${name}`;

    const portfolio_table = new dynamodb.Table(
      this,
      resourceName('portfolio-table'),
      {
        tableName: resourceName('portfolio-table'),
        partitionKey: {
          name: 'id',
          type: dynamodb.AttributeType.NUMBER,
        },
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      }
    );

    const certificates_table = new dynamodb.Table(
      this,
      resourceName('certificates-table'),
      {
        tableName: resourceName('certificates-table'),
        partitionKey: {
          name: 'id',
          type: dynamodb.AttributeType.NUMBER,
        },
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      }
    );

    const lambda_dynamoDbProxy = new lambda.Function(
      this,
      resourceName('dynamoDbProxy'),
      {
        functionName: resourceName('dynamoDbProxy'),
        runtime: lambda.Runtime.PYTHON_3_10,
        handler: 'lambda_function.lambda_handler',
        code: lambda.Code.fromAsset(
          path.join(__dirname, '..', 'lambda', 'dynamoDbProxy')
        ),
        environment: {
          PORTFOLIO_TABLE_NAME: portfolio_table.tableName,
          CERTIFICATES_TABLE_NAME: certificates_table.tableName,
        },
        timeout: cdk.Duration.minutes(5),
      }
    );

    portfolio_table.grantReadData(lambda_dynamoDbProxy);
    certificates_table.grantReadData(lambda_dynamoDbProxy);

    const api = new apigateway.LambdaRestApi(this, resourceName('api'), {
      handler: lambda_dynamoDbProxy,
      integrationOptions: {
        timeout: cdk.Duration.seconds(29),
      },
      proxy: false,
    });

    const apiResource_portfolio = api.root.addResource('portfolio');
    apiResource_portfolio.addMethod('GET');
    apiResource_portfolio.addCorsPreflight({
      allowOrigins: ['*'],
      allowMethods: ['GET'],
    });

    const apiResource_certificates = api.root.addResource('certificates');
    apiResource_certificates.addMethod('GET');
    apiResource_certificates.addCorsPreflight({
      allowOrigins: ['*'],
      allowMethods: ['GET'],
    });

    new cdk.CfnOutput(this, resourceName('api-endpoint-url'), {
      value: api.url,
      description: `${projectName} api endpoint to make requests to /portfolio and /certificates`,
    });
  }
}
