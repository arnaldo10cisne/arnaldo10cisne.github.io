import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class PersonalWebsiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const projectName = 'PersonalWebsite';
    const resourceName = (name: string) => `${projectName}-${name}`;
  }
}
