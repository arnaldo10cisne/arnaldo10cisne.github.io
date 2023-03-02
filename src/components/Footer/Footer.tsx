import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="social_media">
        <p>
          <a
            className="social_media__link"
            href="https://www.instagram.com/arnaldo10cisne/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{' '}
          |{' '}
          <a
            className="social_media__link"
            href="https://github.com/arnaldo10cisne"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{' '}
          |{' '}
          <a
            className="social_media__link"
            href="https://www.linkedin.com/in/arnaldo10cisne/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </p>
      </div>
      <div className="copyright">
        <div className="copyright__line-1">
          <span>&nbsp;©</span>
          <span>&nbsp;COPYRIGHT 2021,&nbsp;</span>
        </div>
        <span className="copyright__line-2">&nbsp;ARNALDO CISNEROS&nbsp;</span>
      </div>
    </footer>
  );
};

export default Footer;
