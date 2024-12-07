import React from 'react';
import './NavbarLogo.scss';

const NavbarLogo = () => {
  return (
    <div>
      <a href="/">
        <img
          className="navbar_logo"
          src="https://s3.us-east-1.amazonaws.com/arnaldocisneros.com/images/logo_small(3).png"
          alt="logo"
        />
      </a>
    </div>
  );
};

export default NavbarLogo;
