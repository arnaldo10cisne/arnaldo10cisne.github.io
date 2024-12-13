import React from 'react';
import './PortfolioHighlights.scss';
import { ProjectItem } from '../../../utilities/models';
import { useQuery } from 'react-query';
import { LoadingSpinner } from '../../utilities/LoadingSpinner/LoadingSpinner';
import { ProjectCard } from '../../common/ProjectCard/ProjectCard';
import { getAllProjectsFromDynamoDB } from '../../../utilities/aws/awsUtils';

export const PortfolioHighlights = () => {
  const { data: projects } = useQuery<ProjectItem[]>(
    ['PortfolioHighlights', 'project_list'],
    () => getAllProjectsFromDynamoDB(true)
  );

  return (
    <div className="portfolioHighlightSection">
      <h2 className="global__section_divider" style={{ marginTop: '-10px' }}>
        Portfolio Highlights
      </h2>
      <div className="highlight_projectList">
        {projects ? (
          projects.map((project: ProjectItem) => (
            <ProjectCard project={project} />
          ))
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};
