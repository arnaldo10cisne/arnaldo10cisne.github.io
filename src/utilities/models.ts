import html5_icon from '../assets/icons/html5.png';
import css3_icon from '../assets/icons/css3.png';
import javascript_icon from '../assets/icons/javascript.png';
import typescript_icon from '../assets/icons/typescript.png';
import python_icon from '../assets/icons/python.png';
import django_icon from '../assets/icons/django.png';
import react_icon from '../assets/icons/react.png';
import sass_icon from '../assets/icons/sass.png';
import firebase_icon from '../assets/icons/firebase.png';
import git_icon from '../assets/icons/git.png';
import github_icon from '../assets/icons/github.png';
import npm_icon from '../assets/icons/npm.png';
import nodejs_icon from '../assets/icons/nodejs.png';
import linux_icon from '../assets/icons/linux.png';
import aws_icon from '../assets/icons/aws.png';

export const CERTIFICATES_DYNAMODB_TABLE_NAME =
  process.env.REACT_APP_DYNAMODB_CERTIFICATES_TABLE;

export const PORTFOLIO_DYNAMODB_TABLE_NAME =
  process.env.REACT_APP_DYNAMODB_PORTFOLIO_TABLE;

export const FIREBASE_RTDB_URL =
  'https://personal-website-de56c-default-rtdb.firebaseio.com/';

export const EMAIL_REGEX =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

export const DEFAULT_TITLE = 'Arnaldo Cisneros';

export const TECHNOLOGIES = {
  HTML5: 'HTML 5',
  CSS3: 'CSS 3',
  SASS: 'Sass',
  JAVASCRIPT: 'Javascript',
  TYPESCRIPT: 'Typescript',
  REACTJS: 'React JS',
  REACT_ROUTER_DOM: 'React Router',
  PYTHON: 'Python',
  DJANGO: 'Django',
  FIREBASE: 'Firebase',
  GIT: 'Git',
  GITHUB: 'Github',
  NPM: 'NPM',
  NODEJS: 'Node JS',
  LINUX: 'Linux',
  AWS: 'AWS',
  AWS_EC2: 'Amazon EC2',
  AWS_S3: 'Amazon S3',
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
    name: TECHNOLOGIES.PYTHON,
    icon: python_icon,
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
    name: TECHNOLOGIES.DJANGO,
    icon: django_icon,
  },
  {
    name: TECHNOLOGIES.FIREBASE,
    icon: firebase_icon,
  },
  {
    name: TECHNOLOGIES.SASS,
    icon: sass_icon,
  },
  {
    name: TECHNOLOGIES.REACTJS,
    icon: react_icon,
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
