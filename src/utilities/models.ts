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
  company?: string;
  instructor?: string;
  instructor_link?: string;
  technologies?: string[];
  languages?: string[];
  completion_date?: string;
  highlight?: boolean;
}
