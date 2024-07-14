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
  const { data: projects, isLoading } = useQuery<ProjectItem[]>(
    ['Portfolio', 'project_list'],
    getProjects
  );

  const categorizedProjects = {
    [PROJECT_TYPES.WEB]: [] as ProjectItem[],
    [PROJECT_TYPES.CODE]: [] as ProjectItem[],
    [PROJECT_TYPES.CLOUD]: [] as ProjectItem[],
  };

  if (projects) {
    projects.forEach((project) => {
      if (project.project_type) {
        categorizedProjects[
          project.project_type as keyof typeof categorizedProjects
        ].push(project);
      }
    });
  }

  const renderProjects = (projects: ProjectItem[], title: string) => (
    <>
      <h2 className="global__section_divider">{title}</h2>
      <div className="projectList global__page_container">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p>No hay proyectos disponibles en esta categoría.</p>
        )}
      </div>
    </>
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <PageTitle title="Portfolio" />
      {renderProjects(
        categorizedProjects[PROJECT_TYPES.CLOUD],
        'Cloud Projects'
      )}
      {renderProjects(
        categorizedProjects[PROJECT_TYPES.WEB],
        'Web Development Projects'
      )}
      {renderProjects(
        categorizedProjects[PROJECT_TYPES.CODE],
        'Coding Projects'
      )}
    </>
  );
};

export default Portfolio;
