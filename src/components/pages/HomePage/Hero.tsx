import React from 'react';
import './Hero.scss';
import { HERO_DESCRIPTION } from '../../../utilities/models';

const Hero = () => {
  return (
    <div className="hero">
      <div className="titleContainer">
        <p className="preTitle">Hello! My name is</p>
        <h1 className="title">Arnaldo Cisneros</h1>
        <div className="postTitle">
          <p>and I'm a Software Engineer</p>
          <p>located in Medellín, Colombia.</p>
        </div>
      </div>

      <div className="presentationTextContainer">
        <p className="presentationText">{HERO_DESCRIPTION}</p>
      </div>
    </div>
  );
};

export default Hero;
