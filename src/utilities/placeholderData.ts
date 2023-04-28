import { techLabels } from './models';
import { languages } from './models';

// This should be replaced by a network call to a backend holding the projects
export const projectsTemplates = [
  {
    id: 1,
    name: '"UNO!" card game in Python',
    date: '2020 - 2021',
    thumbnail:
      'https://res.cloudinary.com/arnaldo10cisne/image/upload/v1623701627/Uno-python-captures/uno-python-cover_hn4o6b.png',
    description_innerHTML: `<p class="portfolio__about_section__text">Why use cards made in cardboard, when you can play with your friends and family in the comfort of a black screen with high contrast colors?<br><br>When I start to learn a new language, I like to test my knowledge creating a small program like this one. It uses cycles, conditionals, object oriented programming, functions, and many other structures. At first it may sound simple, but as you start the testing process, you'll find out that there are many lttle things that you need to consider to avoid possible bugs. Feel free to check the code on Github. You can also clone the repository, o simply download it to play the game. Just remember that you will need to go to the <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" class="in-text-link">oficial site of python</a> to get everything you need to run the code.</p>`,
    technologies: [techLabels.PYTHON],
    languages: [languages.SPANISH],
    screens: [
      'https://res.cloudinary.com/arnaldo10cisne/image/upload/v1623701627/Uno-python-captures/uno-python-cover_hn4o6b.png',
      'https://res.cloudinary.com/arnaldo10cisne/image/upload/v1623701492/Uno-python-captures/cap1_ylmvkm.png',
      'https://res.cloudinary.com/arnaldo10cisne/image/upload/v1623701492/Uno-python-captures/cap2_m5ggba.png',
      'https://res.cloudinary.com/arnaldo10cisne/image/upload/v1623701492/Uno-python-captures/cap3_gcjsuf.png',
      'https://res.cloudinary.com/arnaldo10cisne/image/upload/v1623701492/Uno-python-captures/cap4_pydwx0.png',
      'https://res.cloudinary.com/arnaldo10cisne/image/upload/v1623701492/Uno-python-captures/cap5_pd7vw4.png',
    ],
    website_link: null,
    github_link: 'https://github.com/arnaldo10cisne/UNO-in-python-terminal',
  },
  {
    id: 2,
    name: '"Metroidvania" website',
    date: '2021',
    thumbnail:
      'https://archive.org/download/scus-94244-f-all/SCUS-94244-F-ALL.jpg',
  },
  {
    id: 3,
    name: 'Personal website',
    date: '2021',
    thumbnail:
      'https://archive.org/download/scus-94244-f-all/SCUS-94244-F-ALL.jpg',
  },
  {
    id: 4,
    name: 'Shopping list app',
    date: '2021',
    thumbnail:
      'https://archive.org/download/scus-94244-f-all/SCUS-94244-F-ALL.jpg',
  },
  {
    id: 5,
    name: 'The Marvel Guidebook',
    date: '2021',
    thumbnail:
      'https://archive.org/download/scus-94244-f-all/SCUS-94244-F-ALL.jpg',
  },
  {
    id: 6,
    name: 'NBA App Python Edition',
    date: '2021',
    thumbnail:
      'https://archive.org/download/scus-94244-f-all/SCUS-94244-F-ALL.jpg',
  },
  {
    id: 7,
    name: 'NBA App Web Edition',
    date: '2021',
    thumbnail:
      'https://archive.org/download/scus-94244-f-all/SCUS-94244-F-ALL.jpg',
  },
  {
    id: 8,
    name: 'Cryptography App',
    date: '2021',
    thumbnail:
      'https://archive.org/download/scus-94244-f-all/SCUS-94244-F-ALL.jpg',
  },
];

// This should be replaced by a network call to a backend holding the articles
export const articleTemplates = [
  {
    id: 1,
    name: 'Working from home, living from home',
    date: 'September. 2021',
    sample:
      'The pandemic that started in the first quarter of 2020, due to the SARS-CoV-2 virus, has been and continues to be, an event that will mark a before and after in our lives, not only as individuals but also as a society.',
  },
  {
    id: 2,
    name: 'This website is a finished product',
    date: 'June. 2021',
    sample:
      'This website is not a finished product. Not by any chance. But it is an exciting work in progress.',
  },
];

export const certificateHighlights = [
  {
    id: 1,
    name: 'Definitive HTML and CSS',
    image:
      'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
  },
  {
    id: 2,
    name: 'Javascript Foundations',
    image:
      'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
  },
  {
    id: 3,
    name: 'Introduction to React.js',
    image:
      'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
  },
  {
    id: 4,
    name: 'Node.js Foundations',
    image:
      'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
  },
  {
    id: 5,
    name: 'Professional Git and Github',
    image:
      'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
  },
  {
    id: 6,
    name: 'Terminal and command line introduction',
    image:
      'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
  },
];
