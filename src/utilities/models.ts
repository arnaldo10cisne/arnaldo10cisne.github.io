import html5_icon from '../assets/icons/html5.png';
import css3_icon from '../assets/icons/css3.png';
import javascript_icon from '../assets/icons/javascript.png';
import typescript_icon from '../assets/icons/typescript.png';
import python_icon from '../assets/icons/python.png';
import django_icon from '../assets/icons/django.png';
import react_icon from '../assets/icons/react.png';
import sass_icon from '../assets/icons/sass.png';
import firebase_icon from '../assets/icons/firebase.png';

export const TECHNOLOGIES = {
  HTML5: 'html5',
  CSS3: 'css3',
  SASS: 'sass',
  JAVASCRIPT: 'javascript',
  TYPESCRIPT: 'typescript',
  REACTJS: 'reactjs',
  REACT_ROUTER_DOM: 'react-router-dom',
  PYTHON: 'python',
  DJANGO: 'django',
  FIREBASE: 'firebase',
};

export const LANGUAGES = {
  SPANISH: 'Spanish',
  ENGLISH: 'English',
  FRENCH: 'French',
};

export const COMPANIES = {
  PLATZI: 'platzi',
};

export const COMPANY_ICONS = [
  {
    name: 'platzi',
    icon_link:
      'https://res.cloudinary.com/arnaldo10cisne/image/upload/v1633061210/platzi-logo-symbol_gklcux.png',
  },
];

export const TECHNOLOGIES_ICONS = [
  {
    name: 'html5',
    icon: html5_icon,
  },
  {
    name: 'css3',
    icon: css3_icon,
  },
  {
    name: 'python',
    icon: python_icon,
  },
  {
    name: 'javascript',
    icon: javascript_icon,
  },
  {
    name: 'typescript',
    icon: typescript_icon,
  },
  {
    name: 'django',
    icon: django_icon,
  },
  {
    name: 'firebase',
    icon: firebase_icon,
  },
  {
    name: 'sass',
    icon: sass_icon,
  },
  {
    name: 'reactjs',
    icon: react_icon,
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
}
