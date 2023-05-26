import React from 'react';
import { useParams } from 'react-router-dom';
import CourseInfoTable from './CourseInfoTable';
import './Course.scss';
import { certificateHighlights } from '../../../utilities/placeholderData';

const Course = () => {
  const { id } = useParams();

  const courseToDisplay = certificateHighlights.find((course) => {
    // FINAL LOGIC
    // return course.id === id

    // TESTING PURPOSES
    return course.id === 1;
  });

  // return <>{`course with id = ${id}`}</>;

  return (
    <>
      <div className="course_cover">
        <h1 className="course_title">{courseToDisplay?.name}</h1>
        <div className="course_linkContainer">
          <a
            className="certificate_link"
            href={`${courseToDisplay?.certificate_link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`${courseToDisplay?.icon}`} alt="Course badge" />
          </a>
          <p className="course_clickPicture">
            Click on the picture to see the certificate
          </p>
        </div>
      </div>
      <CourseInfoTable course={courseToDisplay} />
      <div
        style={{
          marginBottom: '40px',
        }}
      >
        <a
          href={`${courseToDisplay?.course_link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="global__button global__smallButton"
        >
          Check this course!
        </a>
      </div>
    </>
  );
};

export default Course;
