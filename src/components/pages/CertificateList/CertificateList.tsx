import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import './CertificateList.scss';
import { certificateHighlights } from '../../../utilities/placeholderData';
import CertificateCell from './CertificateCell';

const CertificateList = () => {
  return (
    <>
      <PageTitle title="Certificates" />
      <h2 className="global__section_divider">Courses</h2>
      {certificateHighlights.map((certificate) => {
        return <CertificateCell certificate={certificate} />;
      })}
    </>
  );
};

export default CertificateList;
