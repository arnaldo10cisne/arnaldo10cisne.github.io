import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="titleContainer">
        <p className="preTitle">Hello! My name is</p>
        <h1 className="title">Arnaldo Cisneros</h1>
        <p className="postTitle">
          and i'm a Software Engineer
          <br />
          located in Medellín, Colombia.
        </p>
      </div>

      <div className="presentationTextContainer">
        <p className="presentationText">
          Originally from cities always hugged by mountains and tropical
          climates, I've been a passionate student of computer science and
          software creation since my teenage years. I'm also an enthusiastic
          follower of self-learning, and support free access to knowledge for
          everyone through the internet.
        </p>
      </div>

    </div>
  );
};

export default Hero;
