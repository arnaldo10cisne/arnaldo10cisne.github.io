export const techLabels = {
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

export const languages = {
  SPANISH: 'spanish',
  ENGLISH: 'english',
  FRENCH: 'french',
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
