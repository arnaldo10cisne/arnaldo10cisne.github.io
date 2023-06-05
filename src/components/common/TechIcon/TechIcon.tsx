import React, { useState } from 'react';
import './TechIcon.scss';

interface TechIconProps {
  tech:
    | {
        name: string;
        icon: string;
      }
    | undefined;
}

const TechIcon = ({ tech }: TechIconProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span className="techIconContainer">
      <img
        className="course_tech_icon"
        src={tech?.icon}
        alt="Course badge"
        onMouseEnter={() => {
          setIsVisible(true);
        }}
        onMouseLeave={() => {
          setIsVisible(false);
        }}
      />

      {isVisible && <span className="tectTooltip">{tech?.name}</span>}
    </span>
  );
};

export default TechIcon;
