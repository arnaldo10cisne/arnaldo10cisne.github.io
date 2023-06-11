import React from 'react';
import './Navbar.scss';
import NavbarButton from './NavbarButton';

const navbarItems = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Portfolio',
    to: '/portfolio',
  },
  {
    label: 'About',
    to: '/about',
  },
  // {
  //   label: 'Contact',
  //   to: '/contact',
  // },
];

const Navbar = () => {
  const pathname = window.location.pathname;

  return (
    <div className="navbar_container">
      <div className="logo">
        <a href="/">
          <img
            className="navbar_logo"
            src="https://arnaldo10cisne.github.io/legacy_personal_website/assets/img/logo_small(3).png"
            alt="logo"
            width={'120px'}
          />
        </a>
      </div>
      <div className="menu">
        {navbarItems.map((item) => (
          <NavbarButton
            label={item.label}
            route={item.to}
            selected={
              item.label === 'Home'
                ? pathname === item.to
                : pathname.includes(item.to)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
