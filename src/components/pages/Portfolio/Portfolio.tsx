import React from 'react';
import './Portfolio.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
import { projectsTemplates } from '../../../utilities/placeholderData';

const Portfolio = () => {
  return (
    <>
      <PageTitle title="Portfolio" />
      <h2 className="global__section_divider">Projects</h2>
      <div className="projectList global__page_container">
        {projectsTemplates.map((project) => {
          return (
            <div className="projectCell">
              <img
                className="projectImage"
                src={`${project.image}`}
                alt={`${project.name} thumbnail`}
                height={300}
              />
              <a className="projectName" href={`/portfolio/${project.id}`}>
                {project.name}
              </a>
              <p className="projectDate">{project.date}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
