import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import './CertificateList.scss';
import CertificateCell from './CertificateCell';
import { CertificateItem } from '../../../utilities/models';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../utilities/LoadingSpinner/LoadingSpinner';
import { getAllCertificatesFromDynamoDB } from '../../../utilities/awsUtils';

const CertificateList = () => {
  const { data: courses } = useQuery<CertificateItem[]>(
    ['CertificateList', 'courses_list'],
    getAllCertificatesFromDynamoDB
  );

  return (
    <>
      <PageTitle title="Certificates" />
      <h2 className="global__section_divider">Courses</h2>
      {courses ? (
        courses?.map((certificate: CertificateItem) => {
          return <CertificateCell certificate={certificate} />;
        })
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default CertificateList;
