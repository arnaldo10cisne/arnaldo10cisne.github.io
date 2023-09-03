import React from 'react';
import './ProjectInfoTable.scss';
import { ProjectItem } from '../../../utilities/models';
import { TECHNOLOGIES_ICONS } from '../../../utilities/models';
import LabeledIcon from '../../common/LabeledIcon/LabeledIcon';

interface ProjectInfoTableProps {
  project: ProjectItem | undefined;
}

const ProjectInfoTable = ({ project }: ProjectInfoTableProps) => {
  return (
    <div className="general_info_grid">
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
          {project?.technologies?.map((project_tech) => (
            <LabeledIcon
              name={
                TECHNOLOGIES_ICONS.find(
                  (technology) => technology.name === project_tech
                )?.name
              }
              icon={
                TECHNOLOGIES_ICONS.find(
                  (technology) => technology.name === project_tech
                )?.icon
              }
            />
          ))}
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
  );
};

export default ProjectInfoTable;
