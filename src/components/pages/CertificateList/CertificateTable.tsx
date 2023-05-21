import React from 'react';
import CertificateCell from './CertificateCell';
import CertificateTableSection from './CertificateTableSection';

const CertificateTable = () => {
  return (
    <div className="certificates-table">
      <CertificateTableSection sectionTitle={'Html and Css'} />

      <CertificateTableSection sectionTitle={'JavaScript'} />

      <CertificateTableSection sectionTitle={'Python'} />

      <CertificateTableSection sectionTitle={'Other courses'} />
    </div>
  );
};

export default CertificateTable;
