import React from 'react';
import { ProjectItem } from '../../../utilities/models';
import { ProjectInfoTable } from './ProjectInfoTable';
import './ProjectAbout.scss';

interface ProjectAboutProps {
  project?: ProjectItem;
}

export const ProjectAbout = ({ project }: ProjectAboutProps) => {
  return (
    <>
      <h2 className="global__section_divider">About this project</h2>
      <div className="about_container">
        <div
          className="project_description"
          dangerouslySetInnerHTML={{
            __html: project?.description_innerHTML || '',
          }}
        ></div>
        <ProjectInfoTable project={project} />
      </div>
    </>
  );
};
