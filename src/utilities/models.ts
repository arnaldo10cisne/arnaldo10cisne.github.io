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

export const FIREBASE_RTDB_URL =
  'https://personal-website-de56c-default-rtdb.firebaseio.com/';

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
  NODEJS: 'NodeJS',
  LINUX: 'Linux',
};

export const LANGUAGES = {
  SPANISH: 'Spanish',
  ENGLISH: 'English',
  FRENCH: 'French',
};

export const COMPANIES = {
  PLATZI: 'Platzi',
};

export const COMPANY_ICONS = [
  {
    name: COMPANIES.PLATZI,
    icon_link:
      'https://res.cloudinary.com/arnaldo10cisne/image/upload/v1633061210/platzi-logo-symbol_gklcux.png',
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
];

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
