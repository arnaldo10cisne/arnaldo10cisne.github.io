import React from 'react';
import './ProjectScreens.scss';
import { ProjectItem } from '../../../utilities/models';

interface ProjectScreensProps {
  project?: ProjectItem | undefined;
}

const ProjectScreens = ({ project }: ProjectScreensProps) => {
  if (!project?.screens) {
    return null;
  }

  return (
    <>
      <h2 className="global__section_divider">Screens</h2>
      <div className="screen_list">
        {project.screens?.map((screen) => {
          return (
            <>
              <div className="project_screen">
                <a href={screen}>
                  <img src={screen} alt="Project screen" />
                </a>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProjectScreens;
