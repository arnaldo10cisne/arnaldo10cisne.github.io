import React from 'react';
import './About.scss';
import { PageTitle } from '../../common/PageTitle/PageTitle';
import {
  ABOUT_EDUCATION_TEXT,
  ABOUT_EXPERTISE_TEXT,
  ABOUT_ME_TEXT,
  ABOUT_WORK_TEXT,
} from '../../../utilities/models';
import { CertificatesHighlights } from './CertificatesHighlights';

export const About = () => {
  return (
    <>
      <PageTitle title="About" />
      <div className="aboutPageContainer">
        <h2 className="global__section_divider title_aboutMe">About me</h2>
        <p className="aboutPageText text_aboutMe">{ABOUT_ME_TEXT}</p>
        <h2 className="global__section_divider  title_aboutWork">
          About my work
        </h2>
        <p className="aboutPageText text_aboutWork">{ABOUT_WORK_TEXT}</p>
        <h2 className="global__section_divider  title_aboutExpertise">
          About my expertise
        </h2>
        <p className="aboutPageText text_aboutExpertise">
          {ABOUT_EXPERTISE_TEXT}
        </p>
        <h2 className="global__section_divider  title_aboutEducation">
          About my education
        </h2>
        <p className="aboutPageText text_aboutEducation">
          {ABOUT_EDUCATION_TEXT}
        </p>
      </div>
      <CertificatesHighlights />
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
