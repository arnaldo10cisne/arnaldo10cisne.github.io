import { CertificateItem, TECHNOLOGIES, LANGUAGES, COMPANIES } from './models';

// This should be replaced by a network call to a backend holding the articles
export const articleTemplates = [
  {
    id: 1,
    name: 'Working from home, living from home',
    date: 'September. 2021',
    highlight: true,
    sample:
      'The pandemic that started in the first quarter of 2020, due to the SARS-CoV-2 virus, has been and continues to be, an event that will mark a before and after in our lives, not only as individuals but also as a society.',
  },
  {
    id: 2,
    name: 'This website is a finished product',
    date: 'Jun 18, 2021',
    highlight: true,
    sample:
      'This website is not a finished product. Not by any chance. But it is an exciting work in progress.',
    article: `
    <article>
        <p>This website is not a finished product. <br><br> Not by any chance. But it is an exciting work in progress. <br><br> There is still the chance that you will, in fact, see some of my favorite poetry "Lorem ipsum dolor sit amet consectetur adipisicing elit". In the world of web development, this is known as a placeholder text that we use when we don't know what to write, and the very text that you are reading right know was just "Lorem text" for a full week. It was not until now, in the evening of the 18th of June, sitting in a table in Starbucks, that I'm finally writting this.<br><br> Having my own website was something that I always looked forward to since I was very little, but I was always waiting "for the right moment". Maybe you are not a developer, but hear me out on this one: The right moment does not exist. You need to start now, or a soon as possible.<br><br>Maybe there are some buttons that doesn't work, or maybe there is a typo in a very important title. But what I can assure you, whoever you are, is that this was made with love, and with a great dedication.<br><br>Only God knows how many times I will update this webiste, and by updating it, I mean burning it to the ground, and from the ashes, build a (hopefully) better site. <br><br>Finally, there is one last piece of advice that I would like to give to everyone out there. Listen carefully, because I thought about it quite hard: <br><br></p>
        <p style="text-align: center; font-style: italic;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, harum sit quasi amet deserunt unde voluptates maiores ducimus ab ipsa cumque vero recusandae commodi, consectetur vel asperiores, rem adipisci illum!</p>
    </article>
    `,
    cover_image:
      'https://res.cloudinary.com/arnaldo10cisne/image/upload/v1631481563/blog-pictures/StarbucksCup_fpbjav.jpg',
  },
];

export const certificateHighlights: CertificateItem[] = [
  {
    id: 1,
    name: 'Definitive HTML and CSS',
    icon: 'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
    instructor: 'Diego De Granda',
    technologies: [TECHNOLOGIES.HTML5, TECHNOLOGIES.CSS3],
    completion_date: '2021',
    languages: [LANGUAGES.SPANISH],
    course_link: 'https://platzi.com/cursos/html-css/',
    certificate_link:
      'https://drive.google.com/file/d/1WjqyMnDFDCoKVkL1bkJ48VTO6It7WuhI/view',
    instructor_link: 'https://www.instagram.com/degranda/',
    highlight: true,
    company: COMPANIES.PLATZI,
  },
  {
    id: 2,
    name: 'Javascript Foundations',
    icon: 'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
    company: COMPANIES.PLATZI,
    technologies: [TECHNOLOGIES.JAVASCRIPT],
  },
  {
    id: 3,
    name: 'Introduction to React.js',
    icon: 'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
    company: COMPANIES.PLATZI,
    technologies: [TECHNOLOGIES.JAVASCRIPT, TECHNOLOGIES.REACTJS],
  },
  {
    id: 4,
    name: 'Node.js Foundations',
    icon: 'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
    company: COMPANIES.PLATZI,
  },
  {
    id: 5,
    name: 'Professional Git and Github',
    icon: 'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
    company: COMPANIES.PLATZI,
  },
  {
    id: 6,
    name: 'Terminal and command line introduction',
    icon: 'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
    company: COMPANIES.PLATZI,
  },
];
