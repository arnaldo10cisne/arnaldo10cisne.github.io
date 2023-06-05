import React from 'react';
import { ProjectItem } from '../../../utilities/models';

interface ProjectLinksProps {
  project: ProjectItem | undefined;
}

const ProjectLinks = ({ project }: ProjectLinksProps) => {
  return (
    <>
      <div className="ProjectLinks_linkContainer">
        {project?.website_link && (
          <a
            href={project.website_link}
            className="visitWebsite_btn global__button global__smallButton"
            style={{
              marginBottom: '20px',
            }}
          >
            Visit this website!
          </a>
        )}
        {project?.github_link && (
          <a
            href={project.github_link}
            className="githubLink_btn global__button global__smallButton"
            style={{
              marginBottom: '20px',
            }}
          >
            Check it on Github!
          </a>
        )}
      </div>
    </>
  );
};

export default ProjectLinks;