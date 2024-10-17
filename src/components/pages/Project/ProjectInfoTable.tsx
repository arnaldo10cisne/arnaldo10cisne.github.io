import React from 'react';
import './ProjectInfoTable.scss';
import {
  CLOUD_SERVICES_ICONS,
  PROJECT_TYPES,
  ProjectItem,
} from '../../../utilities/models';
import { TECHNOLOGIES_ICONS } from '../../../utilities/models';
import LabeledIcon from '../../common/LabeledIcon/LabeledIcon';

interface ProjectInfoTableProps {
  project: ProjectItem | undefined;
}

interface CloudServicesProps {
  cloud_services: string[] | undefined;
}

interface ProjectTechProps {
  technologies: string[] | undefined;
}

interface LabeledIconListProps {
  items: string[] | undefined;
  iconList: { name: string; icon: string }[];
}

const LabeledIconList = ({ items, iconList }: LabeledIconListProps) => {
  return (
    <>
      {items?.map((item: string) => {
        const iconData = iconList.find((iconItem) => iconItem.name === item);
        return (
          <LabeledIcon key={item} name={iconData?.name} icon={iconData?.icon} />
        );
      })}
    </>
  );
};

const CloudServices = ({ cloud_services }: CloudServicesProps) => {
  return (
    <div className="table_row">
      <p className="type-column">Cloud Services</p>
      <div className="content-column">
        <LabeledIconList
          items={cloud_services}
          iconList={CLOUD_SERVICES_ICONS}
        />
      </div>
    </div>
  );
};

const ProjectTech = ({ technologies }: ProjectTechProps) => {
  return (
    <div className="table_row">
      <p className="type-column">Tech</p>
      <div className="content-column">
        <LabeledIconList items={technologies} iconList={TECHNOLOGIES_ICONS} />
      </div>
    </div>
  );
};

const ProjectInfoTable = ({ project }: ProjectInfoTableProps) => {
  return (
    <div className="general_info_grid">
      <ProjectTech technologies={project?.technologies} />

      {project?.project_type === PROJECT_TYPES.CLOUD && (
        <CloudServices cloud_services={project?.cloud_services} />
      )}

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
