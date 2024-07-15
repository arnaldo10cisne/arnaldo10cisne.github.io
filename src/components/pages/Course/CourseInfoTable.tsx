import React from 'react';
import { CertificateItem, TECHNOLOGIES_ICONS } from '../../../utilities/models';
import LabeledIcon from '../../common/LabeledIcon/LabeledIcon';

interface CourseInfoTableProps {
  course: CertificateItem | undefined;
}

interface InfoRowProps {
  label: string;
  content: React.ReactNode;
  isVisible: boolean;
}

const InfoRow = ({ label, content, isVisible }: InfoRowProps) => {
  if (!isVisible) return null;

  return (
    <>
      <p className="course_typeColumn">{label}</p>
      <p className="course_contentColumn">{content}</p>
    </>
  );
};

const TechList = ({ technologies }: { technologies: string[] | undefined }) => {
  if (!technologies || technologies.length === 0) return null;

  return (
    <>
      {technologies.map((course_tech) => {
        const tech = TECHNOLOGIES_ICONS.find(
          (technology) => technology.name === course_tech
        );
        return tech ? (
          <LabeledIcon key={course_tech} name={tech.name} icon={tech.icon} />
        ) : null;
      })}
    </>
  );
};

const CourseInfoTable = ({ course }: CourseInfoTableProps) => {
  if (!course) {
    return <p>No course data available</p>;
  }

  return (
    <>
      <h2 className="global__section_divider">About this course</h2>
      <div className="course_generalInfoGrid">
        <InfoRow
          label="Tech"
          content={<TechList technologies={course.technologies} />}
          isVisible={!!course.technologies && course.technologies.length > 0}
        />

        {course.instructor && course.instructor_link && (
          <>
            <div style={{ position: 'relative' }}>
              <p
                className="course_typeColumn"
                style={{ position: 'absolute', bottom: '0' }}
              >
                Instructor
              </p>
            </div>
            <a
              href={course.instructor_link}
              target="_blank"
              rel="noopener noreferrer"
              className="course_contentColumn"
            >
              <p className="course_tableLink">{course.instructor}</p>
            </a>
          </>
        )}

        <InfoRow
          label="Year"
          content={course.completion_date}
          isVisible={!!course.completion_date}
        />

        <InfoRow
          label="Language"
          content={course.languages}
          isVisible={!!course.languages}
        />
      </div>
    </>
  );
};

export default CourseInfoTable;
