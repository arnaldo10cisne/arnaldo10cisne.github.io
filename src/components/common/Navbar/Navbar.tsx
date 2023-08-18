import React from 'react';
import './Navbar.scss';
import NavbarButton from './NavbarButton';
import { navbarItems } from './NavbarItems';
import NavbarLogo from './NavbarLogo';

const Navbar = () => {
  const pathname = window.location.pathname;

  return (
    <div className="navbar_container">
      <NavbarLogo />
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
