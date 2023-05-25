import React from 'react';
import './ProjectScreens.scss';

interface ProjectScreensProps {
  screenList?: string[];
}

const ProjectScreens = ({ screenList }: ProjectScreensProps) => {
  if (!screenList) {
    return null;
  }

  return (
    <>
      <h2 className="global__section_divider">Screens</h2>
      <div className="screen_list">
        {screenList.map((screen) => {
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
