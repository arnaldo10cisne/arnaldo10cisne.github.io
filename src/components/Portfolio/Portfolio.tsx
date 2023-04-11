import React from 'react';
import './Portfolio.scss';

// This should be replaced by a network call to a backend holding the projects
const projectsTemplates = [
  {
    name: '"UNO!" card game in Python',
    date: '2020 - 2021',
    image: 'IMAGE',
  },
  {
    name: '"Metroidvania" website',
    date: '2021',
    image: 'IMAGE',
  },
  {
    name: 'Personal website',
    date: '2021',
    image: 'IMAGE',
  },
  {
    name: 'Shopping list app',
    date: '2021',
    image: 'IMAGE',
  },
  {
    name: 'The Marvel Guidebook',
    date: '2021',
    image: 'IMAGE',
  },
  {
    name: 'NBA App Python Edition',
    date: '2021',
    image: 'IMAGE',
  },
  {
    name: 'NBA App Web Edition',
    date: '2021',
    image: 'IMAGE',
  },
  {
    name: 'Cryptography App',
    date: '2021',
    image: 'IMAGE',
  },
];

const Portfolio = () => {
  return (
    <>
      <h1 className="general__page_title">Portfolio</h1>
      <h2 className="general__section_divider">Projects</h2>
      {projectsTemplates.map((project) => {
        return (
          <>
            <p>{project.date}</p>
            <h3>{project.name}</h3>
            <p>{project.image}</p>
          </>
        );
      })}
    </>
  );
};

export default Portfolio;
