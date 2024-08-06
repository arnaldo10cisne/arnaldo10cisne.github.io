import React from 'react';
import './PortfolioHighlights.scss';
import { FIREBASE_RTDB_URL, ProjectItem } from '../../../utilities/models';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../utilities/LoadingSpinner/LoadingSpinner';
import ProjectCard from '../../common/ProjectCard/ProjectCard';
import { getAllProjectsFromDynamoDB } from '../../../utilities/awsUtils';

const PortfolioHighlights = () => {
  const getProjects = async () =>
    await getAllProjectsFromDynamoDB().then((data) => data);

  const { data: projects } = useQuery<ProjectItem[]>(
    ['PortfolioHighlights', 'project_list'],
    getProjects
  );

  const projectsToHighlight = projects?.filter(
    (project: ProjectItem) => project.highlight
  );

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
