import React from 'react';
import { CertificateItem } from '../../../utilities/models';

interface CourseInfoTableProps {
  course: CertificateItem | undefined;
}

const CourseInfoTable = ({ course }: CourseInfoTableProps) => {
  return (
    <>
      <h2 className="global__section_divider">About this course</h2>
      <div className="course_generalInfoGrid">
        <div style={{ position: 'relative' }}>
          <p
            className="course_typeColumn"
            style={{ position: 'absolute', bottom: '0' }}
          >
            Instructor
          </p>
        </div>
        <a
          href={`${course?.instructor_link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="course_contentColumn"
        >
          <p className="course_tableLink">{course?.instructor}</p>
        </a>
        <p className="course_typeColumn">Tech</p>
        <p className="course_contentColumn">{course?.technologies}</p>
        <p className="course_typeColumn">Year</p>
        <p className="course_contentColumn">{course?.completion_date}</p>
        <p className="course_typeColumn">Language</p>
        <p className="course_contentColumn">{course?.languages}</p>
      </div>
    </>
  );
};

export default CourseInfoTable;
