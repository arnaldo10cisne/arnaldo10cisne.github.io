import React from 'react';
import { ProjectItem } from '../../../utilities/models';
import './ProjectCard.scss';

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      className="projectCell"
      href={`/portfolio/${project.id}`}
      data-testid="project-cell"
    >
      <img
        className="projectImage"
        src={`${project.thumbnail}`}
        alt={`${project.name} thumbnail`}
      />
      <p className="projectName">{project.name}</p>
      <p className="projectDate">{project.date}</p>
    </a>
  );
};

export default ProjectCard;
