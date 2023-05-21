import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import './CertificateList.scss';
import CertificateTable from './CertificateTable';

const CertificateList = () => {
  return (
    <>
      <PageTitle title="Certificates" />
      <h2 className="global__section_divider">Courses</h2>
      <CertificateTable />
    </>
  );
};

export default CertificateList;
