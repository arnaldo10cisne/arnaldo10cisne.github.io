// scripts/generateConfig.js

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const stackName = 'PersonalWebsite-ServerlessStack';

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

// Predefined config with empty values
const predefinedConfig = {
  apiEndpointUrl: '',
};

function writeConfigFile(config) {
  fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });

  fs.writeFileSync(outputFilePath, JSON.stringify(config, null, 2));
  console.log(`Config file created at ${outputFilePath}`);
}

exec(
  `aws cloudformation describe-stacks --stack-name ${stackName} --query "Stacks[0].Outputs" --output json`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing AWS CLI command: ${error}`);
      writeConfigFile(predefinedConfig);
      return;
    }

    try {
      const outputs = JSON.parse(stdout);
      const config = {};

      outputs.forEach((output) => {
        switch (output.OutputKey) {
          case 'PersonalWebsiteapiendpointurl':
            config.apiEndpointUrl = output.OutputValue;
            break;
          default:
            break;
        }
      });

      writeConfigFile(config);
    } catch (parseError) {
      console.error(`Error parsing AWS CLI output: ${parseError}`);
      writeConfigFile(predefinedConfig);
    }
  }
);
