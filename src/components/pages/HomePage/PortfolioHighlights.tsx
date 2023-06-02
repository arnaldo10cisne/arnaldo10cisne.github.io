import React from 'react';
import './PortfolioHighlights.scss';
import { FIREBASE_RTDB_URL, ProjectItem } from '../../../utilities/models';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../utilities/LoadingSpinner/LoadingSpinner';

const PortfolioHighlights = () => {
  const getProjects = async () =>
    await fetch(FIREBASE_RTDB_URL + 'projects.json')
      .then((response) => response.json())
      .then((data) => data);

  const { data: projects } = useQuery(
    ['PortfolioHighlights', 'project_list'],
    getProjects
  );

  if (!projects) {
    return <LoadingSpinner />;
  }

  const projectsToHighlight = projects.filter(
    (project: ProjectItem) => project.highlight
  );

  return (
    <div className="portfolioHighlightSection">
      <h2 className="global__section_divider" style={{ marginTop: '-10px' }}>
        Portfolio Highlights
      </h2>
      <div className="highlight_projectList">
        {projectsToHighlight.map((project: ProjectItem) => {
          return (
            <div className="highlight_projectCell">
              <img
                className="highlight_projectImage"
                src={`${project.thumbnail}`}
                alt={`${project.name} thumbnail`}
              />
              <a
                className="highlight_projectName"
                href={`/portfolio/${project.id}`}
              >
                {project.name}
              </a>
              <p className="highlight_projectDate">{project.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioHighlights;
