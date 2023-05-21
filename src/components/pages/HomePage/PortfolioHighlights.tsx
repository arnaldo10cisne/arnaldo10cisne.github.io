import React from 'react';
import { projectsTemplates } from '../../../utilities/placeholderData';
import './PortfolioHighlights.scss';

const PortfolioHighlights = () => {
  const projectsToHighlight = projectsTemplates.filter(
    (project) => project.highlight
  );

  return (
    <div className="portfolioHighlightSection">
      <h2 className="global__section_divider">Portfolio Highlights</h2>
      {projectsToHighlight.map((project) => {
        return <>{project.name}</>;
      })}
    </div>
  );
};

export default PortfolioHighlights;
