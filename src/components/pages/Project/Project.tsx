import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectScreens from './ProjectScreens';
import ProjectLinks from './ProjectLinks';
import ProjectAbout from './ProjectAbout';
import './Project.scss';
import { FIREBASE_RTDB_URL, ProjectItem } from '../../../utilities/models';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../utilities/LoadingSpinner/LoadingSpinner';

const Project = () => {
  const { id } = useParams();

  const getProject = async () =>
    await fetch(FIREBASE_RTDB_URL + `projects/${Number(id) - 1}.json`)
      .then((response) => response.json())
      .then((data) => data);

  const { data: projectToDisplay } = useQuery<ProjectItem>(
    ['Project', 'project_list'],
    getProject
  );

  if (!projectToDisplay) {
    return <LoadingSpinner />;
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
