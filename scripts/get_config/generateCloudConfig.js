// scripts/generateConfig.js

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const stackName = 'PersonalWebsiteStack';

// File path to store information
const outputFilePath = path.join(
  __dirname,
  '..',
  '..',
  'src',
  'utilities',
  'aws',
  'config.json'
);

// Running the AWS CLI commando to obtain ids
exec(
  `aws cloudformation describe-stacks --stack-name ${stackName} --query "Stacks[0].Outputs" --output json`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error ejecutando el comando AWS CLI: ${error}`);
      return;
    }

    try {
      const outputs = JSON.parse(stdout);
      const config = {};
      console.log(outputs);

      outputs.forEach((output) => {
        switch (output.OutputKey) {
          case 'PersonalWebsiteapiendpointurl':
            config.apiEndpointUrl = output.OutputValue;
            break;
          // More uses cases go here
          default:
            break;
        }
      });

      // Making sure the Output file path exists
      fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });

      // Writing JSON
      fs.writeFileSync(outputFilePath, JSON.stringify(config, null, 2));
      console.log(`Config file created in ${outputFilePath}`);
    } catch (parseError) {
      console.error(
        `Error parseando la salida del comando AWS CLI: ${parseError}`
      );
    }
  }
);
