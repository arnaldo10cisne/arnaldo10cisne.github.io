import React from 'react';
import { projectsTemplates } from '../../../utilities/placeholderData';
import './PortfolioHighlights.scss';

const PortfolioHighlights = () => {
  const projectsToHighlight = projectsTemplates.filter(
    (project) => project.highlight
  );

  return (
    <div className="portfolioHighlightSection">
      <h2 className="global__section_divider" style={{ marginTop: '-10px' }}>
        Portfolio Highlights
      </h2>
      <div className="highlight_projectList">
        {projectsToHighlight.map((project) => {
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
