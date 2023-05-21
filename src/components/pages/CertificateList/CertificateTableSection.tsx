import React from 'react';
import CertificateCell from './CertificateCell';
import { certificateHighlights } from '../../../utilities/placeholderData';

interface CertificateTableSectionProps {
  sectionTitle: string;
}

const CertificateTableSection = ({
  sectionTitle,
}: CertificateTableSectionProps) => {
  return (
    <>
      <p className="platzi-course-section">
        {sectionTitle}{' '}
        <span>
          <img
            src="./assets/icons/triangle-icon.png"
            width="15"
            className="arrow"
            alt="Menu arrow"
          />
        </span>
      </p>
      <div className="courses_list">
        {certificateHighlights.map(() => {
          return (
            <CertificateCell
              link={''}
              academyIcon={''}
              courseIcon={''}
              courseName={''}
            />
          );
        })}
      </div>
    </>
  );
};

export default CertificateTableSection;
