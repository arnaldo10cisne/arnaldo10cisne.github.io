import React from 'react';
import './Navbar.scss';

const navbarItems = [
  {
    label: 'Home',
    to: '/home',
  },
  {
    label: 'About',
    to: '/about',
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      {navbarItems.map((item) => {
        return <a href={`${item.to}`}>{item.label}</a>;
      })}
    </div>
  );
};

export default Navbar;
