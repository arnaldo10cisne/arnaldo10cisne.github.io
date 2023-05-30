import React from 'react';
import './Footer.scss';

const links = [
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/arnaldo10cisne/',
    show: false,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/arnaldo10cisne/',
    show: false,
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/arnaldo10cisne',
    show: false,
  },
  {
    label: 'Github',
    url: 'https://github.com/arnaldo10cisne',
    show: true,
  },
  {
    label: 'Linkedin',
    url: 'https://www.linkedin.com/in/arnaldo10cisne/',
    show: true,
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="social_media">
        <p>
          {links.map((link) => {
            if (link.show) {
              return (
                <>
                  <a
                    className="social_media__link"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                  {links.indexOf(link) !== links.length - 1 && (
                    <span className="linkSeparator"> | </span>
                  )}
                </>
              );
            }
          })}
        </p>
      </div>
      <div className="copyright">
        <div className="copyright__line-1">
          <span>&nbsp;©</span>
          <span>&nbsp;COPYRIGHT 2021,&nbsp;</span>
        </div>
        <span className="copyright__line-2">&nbsp;ARNALDO CISNEROS&nbsp;</span>
      </div>
    </div>
  );
};

export default Footer;
