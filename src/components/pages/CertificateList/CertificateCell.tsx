import React from 'react';
import { CertificateItem } from '../../../utilities/models';
import { COMPANY_ICONS, TECHNOLOGIES_ICONS } from '../../../utilities/models';

interface CertificateCellProps {
  certificate: CertificateItem;
}

const CertificateCell = ({ certificate }: CertificateCellProps) => {
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
        {/* <p className="course_completion_date">{certificate.completion_date}</p> */}
      </div>

      <div className="certificate_section_tech">
        {certificate.technologies?.map((course_tech) => {
          const icon = TECHNOLOGIES_ICONS.find((technology) => {
            return technology.name === course_tech;
          });
          return (
            <img
              className="course_tech_icon"
              src={icon?.icon}
              alt="Course badge"
            />
          );
        })}
      </div>

      <div className="certificate_section_company">
        <img
          className="academy_icon"
          src={academyIcon?.icon_link}
          alt="academy icon"
        />
        <p className="course_company">{certificate.company}</p>
      </div>
    </a>
  );
};

export default CertificateCell;
