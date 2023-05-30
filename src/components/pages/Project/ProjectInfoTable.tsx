import React from 'react';
import './ProjectInfoTable.scss';
import { ProjectItem } from '../../../utilities/models';
import { TECHNOLOGIES_ICONS } from '../../../utilities/models';

interface ProjectInfoTableProps {
  project: ProjectItem | undefined;
}

const ProjectInfoTable = ({ project }: ProjectInfoTableProps) => {
  return (
    <>
      <div className="general-info-grid">
        <div className="table_row">
          <p
            className="type-column"
            style={{ position: 'absolute', bottom: '0', left: '0' }}
          >
            Tech
          </p>
          <div
            className="content-column"
            style={{ position: 'absolute', bottom: '0', right: '0' }}
          >
            {project?.technologies?.map((course_tech) => {
              const icon = TECHNOLOGIES_ICONS.find((technology) => {
                return technology.name === course_tech;
              });
              return (
                <img
                  className="course_tech_icon"
                  src={icon?.icon}
                  alt="Course badge"
                />
              );
            })}
          </div>
        </div>

        <div className="table_row">
          <p className="type-column">Year</p>
          <p className="content-column">{project?.date}</p>
        </div>

        <div className="table_row">
          <p className="type-column">Language</p>
          <p className="content-column">{project?.languages}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectInfoTable;
