import React from 'react';
import { ProjectItem } from '../../../utilities/models';

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="projectCell">
      <img
        className="projectImage"
        src={`${project.thumbnail}`}
        alt={`${project.name} thumbnail`}
        height={300}
      />
      <a className="projectName" href={`/portfolio/${project.id}`}>
        {project.name}
      </a>
      <p className="projectDate">{project.date}</p>
    </div>
  );
};

export default ProjectCard;
