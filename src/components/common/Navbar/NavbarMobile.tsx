import React, { useState } from 'react';
import './NavbarMobile.scss';
import NavbarButton from './NavbarButton';
import { navbarItems } from './NavbarItems';
import triangle_icon from '../../../assets/icons/triangle_icon.png';
import NavbarLogo from './NavbarLogo';

const NavbarMobile = () => {
  const [menuDeployed, setMenuDeployed] = useState(false);
  const pathname = window.location.pathname;
  const NAVBAR_HEIGHT = 62;

  const triggerMenu = (menuDeployed: boolean) => {
    setMenuDeployed(!menuDeployed);
  };

  return (
    <div
      className="mobile_navbar_container"
      style={{
        height: `${
          menuDeployed
            ? `${NAVBAR_HEIGHT * (navbarItems.length + 1)}px`
            : `${NAVBAR_HEIGHT}px`
        }`,
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget) && menuDeployed) {
          setMenuDeployed(false);
        }
      }}
    >
      <NavbarLogo />
      <div className="mobileMenu">
        <div className="menuButtonContainer">
          <button
            className="menuButton"
            onClick={() => {
              triggerMenu(menuDeployed);
            }}
          >
            MENU
            <img
              className={`triagleIcon ${menuDeployed && 'triagleIconReversed'}`}
              src={triangle_icon}
              alt="menu arrow"
            />
          </button>
        </div>
        {menuDeployed &&
          navbarItems.map((item) => (
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

export default NavbarMobile;
