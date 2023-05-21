import React from 'react';

interface CertificateCellProps {
  link: string;
  academyIcon: string;
  courseIcon: string;
  courseName: string;
}

// link: ./certificates-files/course-001
// academyIcon: https://res.cloudinary.com/arnaldo10cisne/image/upload/v1633061210/platzi-logo-symbol_gklcux.png
// courseIcon: https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png

const CertificateCell = ({
  link,
  academyIcon,
  courseIcon,
  courseName,
}: CertificateCellProps) => {
  return (
    <div className="course-container">
      <a href={link}>
        <img className="academy_icon" src={academyIcon} alt="academy icon" />
        <img className="course-icon" src={courseIcon} alt="Course badge" />
        <p className="course-name">{courseName}</p>
      </a>
    </div>
  );
};

export default CertificateCell;
