import React, { useState } from 'react';
import './LabeledIcon.scss';

interface LabeledIconProps {
  name: string | undefined;
  icon: string | undefined;
}

const LabeledIcon = ({ name, icon }: LabeledIconProps) => {
  const [TooltipIsVisible, setTooltipIsVisible] = useState(false);

  return (
    <span className="techIconContainer">
      <img
        className="course_tech_icon"
        src={icon}
        alt={`${name} icon`}
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
        {name}
      </span>
    </span>
  );
};

export default LabeledIcon;
