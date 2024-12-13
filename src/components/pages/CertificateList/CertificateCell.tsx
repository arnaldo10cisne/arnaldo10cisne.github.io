import React from 'react';
import { CertificateItem } from '../../../utilities/models';
import { COMPANY_ICONS, TECHNOLOGIES_ICONS } from '../../../utilities/models';
import { LabeledIcon } from '../../common/LabeledIcon/LabeledIcon';

interface CertificateCellProps {
  certificate: CertificateItem;
}

export const CertificateCell = ({ certificate }: CertificateCellProps) => {
  const academyIcon = COMPANY_ICONS.find((company) => {
    return company.name === certificate.company;
  });
  return (
    <a
      href={`/about/certificates/${certificate.id}`}
      className="certificate_cell"
    >
      <div className="certificate_section_name">
        <img
          className="course_icon"
          src={certificate.icon}
          alt="Course badge"
        />
        <p className="course_name">{certificate.name}</p>
      </div>

      <div className="certificate_section_tech">
        {certificate.technologies?.map((course_tech) => (
          <LabeledIcon
            name={
              TECHNOLOGIES_ICONS.find(
                (technology) => technology.name === course_tech
              )?.name
            }
            icon={
              TECHNOLOGIES_ICONS.find(
                (technology) => technology.name === course_tech
              )?.icon
            }
          />
        ))}
      </div>

      <div className="certificate_section_company">
        <LabeledIcon name={certificate.company} icon={academyIcon?.icon_link} />
      </div>
    </a>
  );
};
