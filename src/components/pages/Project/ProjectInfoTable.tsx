import React from 'react';

interface ProjectInfoTableProps {
  tech: string[] | undefined;
  date: string | undefined;
  languages: string[] | undefined;
}

const ProjectInfoTable = ({ tech, date, languages }: ProjectInfoTableProps) => {
  return (
    <div>
      {tech}
      {date}
      {languages}
    </div>
  );
};

export default ProjectInfoTable;
