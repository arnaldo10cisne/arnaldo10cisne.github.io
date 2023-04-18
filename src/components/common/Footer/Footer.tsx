import React from 'react';
import './Footer.scss';

const links = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/arnaldo10cisne/',
  },
  {
    label: 'Github',
    url: 'https://github.com/arnaldo10cisne',
  },
  {
    label: 'Linkedin',
    url: 'https://www.linkedin.com/in/arnaldo10cisne/',
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="social_media">
        <p>
          {links.map((link) => (
            <>
              <a
                className="social_media__link"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
              {' | '}
            </>
          ))}
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
