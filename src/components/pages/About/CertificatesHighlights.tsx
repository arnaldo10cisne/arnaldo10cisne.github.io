import React from 'react';
import './About.scss';
import { CertificateItem } from '../../../utilities/models';
import { useQuery } from 'react-query';
import { LoadingSpinner } from '../../utilities/LoadingSpinner/LoadingSpinner';
import { getAllCertificatesFromDynamoDB } from '../../../utilities/aws/awsUtils';

export const CertificatesHighlights = () => {
  const { data: courses } = useQuery<CertificateItem[]>(
    ['About', 'courses_list'],
    () => getAllCertificatesFromDynamoDB(true)
  );

  return (
    <div className="certificateList">
      {courses ? (
        courses.map((certificate: CertificateItem) => {
          return (
            <div
              className="certificateItem"
              data-testid="certificate-highlight-cell"
            >
              <a
                href={`/about/certificates/${certificate.id}`}
                className="courseLink"
              >
                <img
                  src={`${certificate.icon}`}
                  alt="COURSE BADGE"
                  className="courseImage"
                />
                <p className="courseName">{certificate.name}</p>
              </a>
            </div>
          );
        })
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};
