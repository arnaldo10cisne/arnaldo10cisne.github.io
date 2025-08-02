import React from 'react';
import './NavbarButton.scss';
import EXTERNAL_ICON from '../../../assets/svg/external_link.svg';

interface NavbarButtonProps {
  label: string;
  route: string;
  selected: boolean;
  isExternal?: boolean;
}

export const NavbarButton = ({
  label,
  route,
  selected,
  isExternal = false,
}: NavbarButtonProps) => {
  return (
    <a
      href={`${route}`}
      className={`${selected ? 'button_selected' : 'button_unselected'} ${
        isExternal ? 'externalLink' : ''
      }`}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {label.toLocaleUpperCase()}
      {isExternal && (
        <span className="externalIcon">
          <img className="icon" src={EXTERNAL_ICON} alt="External Link" />
        </span>
      )}
    </a>
  );
};
