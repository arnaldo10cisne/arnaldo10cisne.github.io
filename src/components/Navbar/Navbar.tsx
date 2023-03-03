import React from 'react';
import './Navbar.scss';
import NavbarButton from './NavbarButton';

const navbarItems = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
  {
    label: 'Portfolio',
    to: '/portfolio',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
];

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="logo">
        <img src="" alt="" />
      </div>
      <div className="menu">
        {navbarItems.map((item) => (
          <NavbarButton label={item.label} route={item.to} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
