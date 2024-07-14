import React from 'react';
import './Portfolio.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
import { useQuery } from 'react-query';
import {
  FIREBASE_RTDB_URL,
  ProjectItem,
  PROJECT_TYPES,
} from '../../../utilities/models';
import LoadingSpinner from '../../utilities/LoadingSpinner/LoadingSpinner';
import ProjectCard from '../../common/ProjectCard/ProjectCard';

const getProjects = async () => {
  const response = await fetch(
    FIREBASE_RTDB_URL +
      'projects.json?' +
      new URLSearchParams({
        orderBy: '"show"',
        equalTo: 'true',
      })
  );
  const data = await response.json();
  return Object.values(data) as ProjectItem[];
};

const Portfolio = () => {
  let webProjects: ProjectItem[] = [];
  let codeProjects: ProjectItem[] = [];
  let cloudProjects: ProjectItem[] = [];

  const { data: projects } = useQuery<ProjectItem[]>(
    ['Portfolio', 'project_list'],
    getProjects
  );

  if (projects) {
    webProjects = projects?.filter(
      (project) => project.project_type === PROJECT_TYPES.WEB
    );
    codeProjects = projects?.filter(
      (project) => project.project_type === PROJECT_TYPES.CODE
    );
    cloudProjects = projects?.filter(
      (project) => project.project_type === PROJECT_TYPES.CLOUD
    );
  }

  return (
    <>
      <PageTitle title="Portfolio" />
      <h2 className="global__section_divider">Cloud Projects</h2>
      <div className="projectList global__page_container">
        {cloudProjects ? (
          cloudProjects.map((project: ProjectItem) => (
            <ProjectCard project={project} />
          ))
        ) : (
          <LoadingSpinner />
        )}
      </div>
      <h2 className="global__section_divider">Web Development Projects</h2>
      <div className="projectList global__page_container">
        {webProjects ? (
          webProjects.map((project: ProjectItem) => (
            <ProjectCard project={project} />
          ))
        ) : (
          <LoadingSpinner />
        )}
      </div>
      <h2 className="global__section_divider">Coding Projects</h2>
      <div className="projectList global__page_container">
        {codeProjects ? (
          codeProjects.map((project: ProjectItem) => (
            <ProjectCard project={project} />
          ))
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </>
  );
};

export default Portfolio;
