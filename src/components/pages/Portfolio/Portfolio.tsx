import React from 'react';
import './Portfolio.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
import { useQuery } from 'react-query';
import { FIREBASE_RTDB_URL, ProjectItem } from '../../../utilities/models';
import LoadingSpinner from '../../utilities/LoadingSpinner/LoadingSpinner';

const Portfolio = () => {
  const getProjects = async () =>
    await fetch(FIREBASE_RTDB_URL + 'projects.json')
      .then((response) => response.json())
      .then((data) => data);

  const { data } = useQuery(['Portfolio', 'project_list'], getProjects);

  return (
    <>
      <PageTitle title="Portfolio" />
      <h2 className="global__section_divider">Projects</h2>
      <div className="projectList global__page_container">
        {data ? (
          data.map((project: ProjectItem) => {
            return (
              <div className="projectCell">
                <img
                  className="projectImage"
                  src={`${project.thumbnail}`}
                  alt={`${project.name} thumbnail`}
                  height={300}
                />
                <a className="projectName" href={`/portfolio/${project.id}`}>
                  {project.name}
                </a>
                <p className="projectDate">{project.date}</p>
              </div>
            );
          })
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </>
  );
};

export default Portfolio;
