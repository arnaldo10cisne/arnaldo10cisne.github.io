import React from 'react';
import './About.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
import { CertificateItem } from '../../../utilities/models';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../utilities/LoadingSpinner/LoadingSpinner';
import { getAllCertificatesFromDynamoDB } from '../../../utilities/aws/awsUtils';

const About = () => {
  const { data: courses } = useQuery<CertificateItem[]>(
    ['About', 'courses_list'],
    () => getAllCertificatesFromDynamoDB(true)
  );

  return (
    <>
      <PageTitle title="About" />
      <div className="aboutPageContainer">
        <h2 className="global__section_divider title_aboutMe">About me</h2>
        <p className="aboutPageText text_aboutMe">
          I was born in the city of Caracas, Venezuela. When i'm not working in
          my computer, I like to play piano, read books or play videogames. I
          really like traveling and making new friends, and I'd rather go to
          dinner with them, than going to parties and loud places. I love to
          have deep conversations with other people. And, last but not least,
          I'm more of a cat person myself.
        </p>
        <h2 className="global__section_divider  title_aboutWork">
          About my work
        </h2>
        <p className="aboutPageText text_aboutWork">
          I like to put heart on every project I begin, even more on projects
          where I can show some creativity. I've done websites, desktop
          applications, and even small videogames on Unity. I like to have a
          full picture of the project I'm going to start before writing the
          first lines of code. If I really get invested in what I'm doing, I can
          be a bit of a perfectionist.
        </p>
        <h2 className="global__section_divider  title_aboutExpertise">
          About my expertise
        </h2>
        <p className="aboutPageText text_aboutExpertise">
          Since highschool, i've always been interested in the process of
          creating software. I started programing in BASIC, and slowly moved to
          C++, Java, and finally Python and JavaScript. I consider myself very
          good using the standards in web development, those being HTML, CSS and
          Javascript, but I like to keep an open mind in terms of learning new
          things.
        </p>
        <h2 className="global__section_divider  title_aboutEducation">
          About my education
        </h2>
        <p className="aboutPageText text_aboutEducation">
          These are some of my most important certificates. Click on each image
          to see a description of the course. You can also see all my
          certificates in the link below.
        </p>
      </div>
      <div className="certificateList">
        {courses ? (
          courses.map((certificate: CertificateItem) => {
            return (
              <div className="certificateItem">
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
      <div className="seeAllCertificates_container">
        <a
          href="/about/certificates"
          className="seeAllCertificates_btn global__button global__smallButton"
        >
          See all certificates
        </a>
      </div>
    </>
  );
};

export default About;
