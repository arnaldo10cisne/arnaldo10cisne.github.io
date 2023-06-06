import React from 'react';
import './Portfolio.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
import { useQuery } from 'react-query';
import { FIREBASE_RTDB_URL, ProjectItem } from '../../../utilities/models';
import LoadingSpinner from '../../utilities/LoadingSpinner/LoadingSpinner';
import ProjectCard from '../../common/ProjectCard/ProjectCard';

const Portfolio = () => {
  const getProjects = async () =>
    await fetch(FIREBASE_RTDB_URL + 'projects.json')
      .then((response) => response.json())
      .then((data) => data);

  const { data: projects } = useQuery<ProjectItem[]>(
    ['Portfolio', 'project_list'],
    getProjects
  );

  const projectsToShow = projects?.filter(
    (project: ProjectItem) => project.show
  );

  return (
    <>
      <PageTitle title="Portfolio" />
      <h2 className="global__section_divider">Projects</h2>
      <div className="projectList global__page_container">
        {projects ? (
          projectsToShow?.map((project: ProjectItem) => (
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
