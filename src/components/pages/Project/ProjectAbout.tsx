import React from 'react';
import { ProjectItem } from '../../../utilities/models';
import ProjectInfoTable from './ProjectInfoTable';

interface ProjectAboutProps {
  project?: ProjectItem;
}

const ProjectAbout = ({ project }: ProjectAboutProps) => {
  return (
    <>
      <h2 className="global__section_divider">About this project</h2>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: project?.description_innerHTML || '',
          }}
        ></div>
        <ProjectInfoTable
          tech={project?.technologies}
          date={project?.date}
          languages={project?.languages}
        />
      </div>
    </>
  );
};

export default ProjectAbout;
