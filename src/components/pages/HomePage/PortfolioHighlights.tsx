import React, { useMemo } from 'react';
import './PortfolioHighlights.scss';
import { ProjectItem } from '../../../utilities/models';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../utilities/LoadingSpinner/LoadingSpinner';
import ProjectCard from '../../common/ProjectCard/ProjectCard';
import { getAllProjectsFromDynamoDB } from '../../../utilities/awsUtils';

const PortfolioHighlights = () => {
  const { data: projects } = useQuery<ProjectItem[]>(
    ['PortfolioHighlights', 'project_list'],
    getAllProjectsFromDynamoDB
  );

  const projectsToHighlight = useMemo(() => {
    return projects?.filter((project: ProjectItem) => project.highlight);
  }, [projects]);

  return (
    <div className="portfolioHighlightSection">
      <h2 className="global__section_divider" style={{ marginTop: '-10px' }}>
        Portfolio Highlights
      </h2>
      <div className="highlight_projectList">
        {projectsToHighlight ? (
          projectsToHighlight.map((project: ProjectItem) => (
            <ProjectCard project={project} />
          ))
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

export default PortfolioHighlights;
