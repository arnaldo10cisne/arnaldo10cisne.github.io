import React from 'react';
import './Portfolio.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
import { projectsTemplates } from '../../../utilities/placeholderData';

const Portfolio = () => {
  return (
    <>
      <PageTitle title="Portfolio" />
      <h2 className="global__section_divider">Projects</h2>
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
