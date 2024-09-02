import AWS from 'aws-sdk';

AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION!,
});

export const dynamoDB = new AWS.DynamoDB.DocumentClient();
