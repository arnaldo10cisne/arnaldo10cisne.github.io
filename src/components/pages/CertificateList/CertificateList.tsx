import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import './CertificateList.scss';
import CertificateCell from './CertificateCell';
import { CertificateItem, FIREBASE_RTDB_URL } from '../../../utilities/models';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../utilities/LoadingSpinner/LoadingSpinner';

const CertificateList = () => {
  const getCourses = async () =>
    await fetch(FIREBASE_RTDB_URL + 'courses.json')
      .then((response) => response.json())
      .then((data) => data);

  const { data } = useQuery(['CertificateList', 'courses_list'], getCourses);
  return (
    <>
      <PageTitle title="Certificates" />
      <h2 className="global__section_divider">Courses</h2>
      {data ? (
        data.map((certificate: CertificateItem) => {
          return <CertificateCell certificate={certificate} />;
        })
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default CertificateList;
