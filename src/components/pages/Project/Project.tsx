import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsTemplates } from '../../../utilities/placeholderData';
import ProjectScreens from './ProjectScreens';
import ProjectLinks from './ProjectLinks';
import ProjectAbout from './ProjectAbout';
import './Project.scss';

const Project = () => {
  const { id } = useParams();

  const projectToDisplay = projectsTemplates.find((project) => {
    // FINAL LOGIC
    // return project.id === id

    // TESTING PURPOSES
    return project.id === 1;
  });

  // return <>{`project with id = ${id}`}</>;

  return (
    <div>
      <div className="project_cover">
        <h1>{projectToDisplay?.name}</h1>
        <img src={`${projectToDisplay?.thumbnail}`} alt="Project Thumbnail" />
      </div>
      <ProjectAbout project={projectToDisplay} />
      <ProjectScreens screenList={projectToDisplay?.screens} />
      <ProjectLinks project={projectToDisplay} />
    </div>
  );
};

export default Project;
