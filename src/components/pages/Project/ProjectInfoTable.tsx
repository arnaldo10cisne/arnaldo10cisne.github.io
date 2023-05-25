import React from 'react';
import './ProjectInfoTable.scss';

interface ProjectInfoTableProps {
  tech: string[] | undefined;
  date: string | undefined;
  languages: string[] | undefined;
}

const ProjectInfoTable = ({ tech, date, languages }: ProjectInfoTableProps) => {
  return (
    <>
      <div className="general-info-grid">
        <div className="table_row">
          <p className="type-column">Tech</p>
          <p className="content-column">{tech}</p>
        </div>

        <div className="table_row">
          <p className="type-column">Year</p>
          <p className="content-column">{date}</p>
        </div>

        <div className="table_row">
          <p className="type-column">Language</p>
          <p className="content-column">{languages}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectInfoTable;
