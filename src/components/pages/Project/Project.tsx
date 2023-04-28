import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsTemplates } from '../../../utilities/placeholderData';
import ProjectInfoTable from './ProjectInfoTable';

const Project = () => {
  const { id } = useParams();

  const projectToDisplay = projectsTemplates.find((project) => {
    // FINAL LOGIC
    // return project.id === id

    // TESTING PURPOSES
    return project.id === 1;
  });

  // return <>{`project with id = ${id}`}</>;

  return (
    <div>
      <div>
        <h1>{projectToDisplay?.name}</h1>
        <img src={`${projectToDisplay?.thumbnail}`} alt="Project Thumbnail" />
      </div>
      <h2 className="global__section_divider">About this project</h2>
      <div>
        {/* To show the description as a React component, probably use react-jsx-parser
        https://github.com/TroyAlford/react-jsx-parser */}
        <div>{projectToDisplay?.description_innerHTML}</div>
        <div>
          <ProjectInfoTable
            tech={projectToDisplay?.technologies}
            date={projectToDisplay?.date}
            languages={projectToDisplay?.languages}
          />
        </div>
      </div>
      <h2 className="global__section_divider">Screens</h2>
      <div>
        {projectToDisplay?.screens?.map((screen) => {
          return <img src={`${screen}`} alt="project image" />;
        })}
      </div>
      <div>
        {projectToDisplay?.website_link !== null && (
          <a
            href={`${projectToDisplay?.website_link}`}
            className="visitWebsite_btn global__button"
          >
            Visit this website!
          </a>
        )}
        {projectToDisplay?.github_link !== null && (
          <a
            href={`${projectToDisplay?.github_link}`}
            className="githubLink_btn global__button"
          >
            Check it on Github!
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
