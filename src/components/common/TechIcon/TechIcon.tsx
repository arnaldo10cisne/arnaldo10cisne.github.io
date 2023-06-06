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
  const [TooltipIsVisible, setTooltipIsVisible] = useState(false);

  return (
    <span className="techIconContainer">
      <img
        className="course_tech_icon"
        src={tech?.icon}
        alt="Course badge"
        onMouseEnter={() => {
          setTooltipIsVisible(true);
        }}
        onMouseLeave={() => {
          setTooltipIsVisible(false);
        }}
      />

      <span
        className={`techTooltip ${
          TooltipIsVisible ? 'tooltipVisible_true' : 'tooltipVisible_false'
        }`}
      >
        {tech?.name}
      </span>
    </span>
  );
};

export default TechIcon;
