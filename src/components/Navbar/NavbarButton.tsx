import React from 'react';
import './NavbarButton.scss';

interface NavbarButtonProps {
  label: string;
  route: string;
}

const NavbarButton = ({ label, route }: NavbarButtonProps) => {
  return (
    <a href={`${route}`} className="button">
      {label.toLocaleUpperCase()}
    </a>
  );
};

export default NavbarButton;
