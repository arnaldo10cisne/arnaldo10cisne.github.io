import html5_icon from '../assets/icons/html5.png';
import css3_icon from '../assets/icons/css3.png';
import sass_icon from '../assets/icons/sass.png';
import javascript_icon from '../assets/icons/javascript.png';
import typescript_icon from '../assets/icons/typescript.png';
import react_icon from '../assets/icons/react.png';
import python_icon from '../assets/icons/python.png';
import django_icon from '../assets/icons/django.png';
import git_icon from '../assets/icons/git.png';
import github_icon from '../assets/icons/github.png';
import npm_icon from '../assets/icons/npm.png';
import nodejs_icon from '../assets/icons/nodejs.png';
import linux_icon from '../assets/icons/linux.png';
import aws_icon from '../assets/icons/aws.png';
import cdk_icon from '../assets/icons/cdk_icon.png';
import firebase_icon from '../assets/icons/firebase.png';
import ec2_icon from '../assets/icons/ec2_icon.svg';
import s3_icon from '../assets/icons/s3_icon.svg';
import amplify_icon from '../assets/icons/amplify_icon.svg';
import dynamodb_icon from '../assets/icons/dynamodb_icon.svg';
import athena_icon from '../assets/icons/athena_icon.svg';
import route53_icon from '../assets/icons/route53_icon.svg';
import rds_icon from '../assets/icons/rds_icon.svg';
import cognito_icon from '../assets/icons/cognito_icon.svg';
import api_gateway_icon from '../assets/icons/api_gateway_icon.svg';
import lambda_icon from '../assets/icons/lambda_icon.svg';
import quicksight_icon from '../assets/icons/quicksight_icon.svg';
import cloudfront_icon from '../assets/icons/cloudfront_icon.svg';
import cloudformation_icon from '../assets/icons/cloudformation_icon.svg';
import codepipeline_icon from '../assets/icons/codepipeline_icon.svg';
import aws_config from './aws/config.json';

export const EMAIL_REGEX =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

export const DEFAULT_TITLE = 'Arnaldo Cisneros';

export const PORTFOLIO_ENDPOINT = `${aws_config.apiEndpointUrl}portfolio`;

export const CERTIFICATES_ENDPOINT = `${aws_config.apiEndpointUrl}certificates`;

export const TECHNOLOGIES = {
  HTML5: 'HTML 5',
  CSS3: 'CSS 3',
  SASS: 'Sass',
  JAVASCRIPT: 'Javascript',
  TYPESCRIPT: 'Typescript',
  REACTJS: 'React JS',
  PYTHON: 'Python',
  DJANGO: 'Django',
  GIT: 'Git',
  GITHUB: 'Github',
  NPM: 'NPM',
  NODEJS: 'Node JS',
  LINUX: 'Linux',
  AWS: 'AWS',
  AWS_CDK: 'AWS CDK',
};

export const CLOUD_SERVICES = {
  FIREBASE: 'Google Firebase',
  AWS_EC2: 'AWS EC2',
  AWS_S3: 'AWS S3',
  AWS_AMPLIFY: 'AWS Amplify',
  AWS_DYNAMODB: 'AWS DynamoDB',
  AWS_ATHENA: 'AWS Athena',
  AWS_ROUTE53: 'AWS Route 53',
  AWS_API_GATEWAY: 'AWS API Gateway',
  AWS_LAMBDA: 'AWS Lambda',
  AWS_COGNITO: 'AWS Cognito',
  AWS_RDS: 'AWS RDS',
  AWS_QUICKSIGHT: 'AWS QuickSight',
  AWS_CLOUDFRONT: 'AWS CloudFront',
  AWS_CLOUDFORMATION: 'AWS CloudFormation',
  AWS_CODEPIPELINE: 'AWS CodePipeline',
};

export const LANGUAGES = {
  SPANISH: 'Spanish',
  ENGLISH: 'English',
  FRENCH: 'French',
};

export const COMPANIES = {
  AWS: 'Amazon Web Services',
  PLATZI: 'Platzi',
};

export const PROJECT_TYPES = {
  WEB: 'web',
  CODE: 'code',
  CLOUD: 'cloud',
};

export const COMPANY_ICONS = [
  {
    name: COMPANIES.PLATZI,
    icon_link:
      'https://s3.amazonaws.com/arnaldocisneros.com/images/platzi-logo-symbol_gklcux.png',
  },
  {
    name: COMPANIES.AWS,
    icon_link:
      'https://s3.amazonaws.com/arnaldocisneros.com/images/Amazon-Web-Services-AWS-Logo.png',
  },
];

export const CLOUD_SERVICES_ICONS = [
  {
    name: CLOUD_SERVICES.FIREBASE,
    icon: firebase_icon,
  },
  {
    name: CLOUD_SERVICES.AWS_EC2,
    icon: ec2_icon,
  },
  {
    name: CLOUD_SERVICES.AWS_S3,
    icon: s3_icon,
  },
  {
    name: CLOUD_SERVICES.AWS_AMPLIFY,
    icon: amplify_icon,
  },
  {
    name: CLOUD_SERVICES.AWS_DYNAMODB,
    icon: dynamodb_icon,
  },
  {
    name: CLOUD_SERVICES.AWS_ATHENA,
    icon: athena_icon,
  },
  {
    name: CLOUD_SERVICES.AWS_ROUTE53,
    icon: route53_icon,
  },
  {
    name: CLOUD_SERVICES.AWS_API_GATEWAY,
    icon: api_gateway_icon,
  },
  {
    name: CLOUD_SERVICES.AWS_LAMBDA,
    icon: lambda_icon,
  },
  {
    name: CLOUD_SERVICES.AWS_COGNITO,
    icon: cognito_icon,
  },
  {
    name: CLOUD_SERVICES.AWS_RDS,
    icon: rds_icon,
  },
  {
    name: CLOUD_SERVICES.AWS_QUICKSIGHT,
    icon: quicksight_icon,
  },
  {
    name: CLOUD_SERVICES.AWS_CLOUDFRONT,
    icon: cloudfront_icon,
  },
  {
    name: CLOUD_SERVICES.AWS_CLOUDFORMATION,
    icon: cloudformation_icon,
  },
  {
    name: CLOUD_SERVICES.AWS_CODEPIPELINE,
    icon: codepipeline_icon,
  },
];

export const TECHNOLOGIES_ICONS = [
  {
    name: TECHNOLOGIES.HTML5,
    icon: html5_icon,
  },
  {
    name: TECHNOLOGIES.CSS3,
    icon: css3_icon,
  },
  {
    name: TECHNOLOGIES.SASS,
    icon: sass_icon,
  },
  {
    name: TECHNOLOGIES.JAVASCRIPT,
    icon: javascript_icon,
  },
  {
    name: TECHNOLOGIES.TYPESCRIPT,
    icon: typescript_icon,
  },
  {
    name: TECHNOLOGIES.REACTJS,
    icon: react_icon,
  },
  {
    name: TECHNOLOGIES.PYTHON,
    icon: python_icon,
  },
  {
    name: TECHNOLOGIES.DJANGO,
    icon: django_icon,
  },
  {
    name: TECHNOLOGIES.GIT,
    icon: git_icon,
  },
  {
    name: TECHNOLOGIES.GITHUB,
    icon: github_icon,
  },
  {
    name: TECHNOLOGIES.NPM,
    icon: npm_icon,
  },
  {
    name: TECHNOLOGIES.NODEJS,
    icon: nodejs_icon,
  },
  {
    name: TECHNOLOGIES.LINUX,
    icon: linux_icon,
  },
  {
    name: TECHNOLOGIES.AWS,
    icon: aws_icon,
  },
  {
    name: TECHNOLOGIES.AWS_CDK,
    icon: cdk_icon,
  },
];

export const CONTACT_REASONS = {
  SALUTE: 'Say hi!',
  QUESTION: 'Ask question',
  WORK: 'Work together',
};

export interface breadcrumbsLink {
  label: string;
  to: string;
  level: number;
}

export interface ProjectItem {
  id: number;
  name: string;
  date: string;
  thumbnail: string;
  description_innerHTML?: string;
  technologies?: string[];
  cloud_services?: string[];
  languages?: string[];
  screens?: string[];
  website_link?: string;
  github_link?: string;
  highlight?: boolean;
  show?: boolean;
  project_type?: string;
}

export interface CertificateItem {
  id: number;
  name: string;
  icon?: string;
  certificate_link?: string;
  course_link?: string;
  company: string;
  instructor?: string;
  instructor_link?: string;
  technologies?: string[];
  languages?: string[];
  completion_date?: string;
  highlight?: boolean;
  show?: boolean;
}
