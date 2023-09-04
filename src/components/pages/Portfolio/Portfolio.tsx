import React from 'react';
import './Portfolio.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
import { useQuery } from 'react-query';
import { FIREBASE_RTDB_URL, ProjectItem } from '../../../utilities/models';
import LoadingSpinner from '../../utilities/LoadingSpinner/LoadingSpinner';
import ProjectCard from '../../common/ProjectCard/ProjectCard';

const Portfolio = () => {
  const getProjects = async () =>
    await fetch(
      FIREBASE_RTDB_URL +
        'projects.json?' +
        new URLSearchParams({
          orderBy: '"show"',
          equalTo: 'true',
        })
    )
      .then((response) => response.json())
      .then((data) => Object.values(data) as ProjectItem[]);

  const { data: projects } = useQuery<ProjectItem[]>(
    ['Portfolio', 'project_list'],
    getProjects
  );

  return (
    <>
      <PageTitle title="Portfolio" />
      <h2 className="global__section_divider">Projects</h2>
      <div className="projectList global__page_container">
        {projects ? (
          projects.map((project: ProjectItem) => (
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
