import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectScreens from './ProjectScreens';
import ProjectLinks from './ProjectLinks';
import ProjectAbout from './ProjectAbout';
import './Project.scss';
import { DEFAULT_TITLE, ProjectItem } from '../../../utilities/models';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../utilities/LoadingSpinner/LoadingSpinner';
import { getPortfolioItemFromDynamoDB } from '../../../utilities/awsUtils';

const Project = () => {
  const { id } = useParams();

  const getProject = async () =>
    await getPortfolioItemFromDynamoDB(Number(id)).then((item) => item);

  const { data: projectToDisplay } = useQuery<ProjectItem | null>(
    ['Project', 'project_list'],
    getProject
  );

  useEffect(() => {
    document.title = projectToDisplay?.name || DEFAULT_TITLE;
  }, [projectToDisplay]);

  if (!projectToDisplay) {
    return <LoadingSpinner />;
  }

  if (!projectToDisplay.show) {
    return <p>Not found</p>;
  }

  return (
    <div>
      <div className="project_cover">
        <h1>{projectToDisplay?.name}</h1>
        <img src={`${projectToDisplay?.thumbnail}`} alt="Project Thumbnail" />
      </div>
      <ProjectAbout project={projectToDisplay} />
      <ProjectScreens project={projectToDisplay} />
      <ProjectLinks project={projectToDisplay} />
    </div>
  );
};

export default Project;
