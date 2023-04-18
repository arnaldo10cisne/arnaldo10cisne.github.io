import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      {/* <div className="header">
        <div id="header--web-banner">
          <div id="web-banner--text">
            <p>Hello! My name is</p>
            <h1 id="web-banner--name">Arnaldo Cisneros</h1>
            <p id="full-stack">
              and i'm a Software Engineer
              <br />
              located in Medellín, Colombia.
            </p>
          </div>
        </div>

        <div id="header--slogan">
          <p>
            Originally from cities always hugged by mountains and tropical
            climates, Arnaldo has been a passionate student of computer science
            and software creation since he was 13 years old.
            <br />
            <br />
            Being an enthusiastic follower of self-learning, he supports free
            access to knowledge for everyone through the internet. Furthermore,
            having studied piano for over a decade, he is a musician with a
            passion for contemplative melodies.
          </p>
        </div>

        <div className="call_to_action_button">
          <a href="./contact" className="button">
            Lets Work Together!
          </a>
        </div>
      </div> */}
      <div className="presentation_banner">
        <p>Hello! My name is</p>
        <h1>Arnaldo Cisneros</h1>
        <p>
          and i'm a Software Engineer
          <br />
          located in Medellín, Colombia.
        </p>
      </div>

      <div>
        <p>
          Originally from cities always hugged by mountains and tropical
          climates, I've been a passionate student of computer science and
          software creation since my teenage years. I'm also an enthusiastic
          follower of self-learning, and support free access to knowledge for
          everyone through the internet.
        </p>
      </div>

      <div>
        <a href="./contact">Lets Work Together!</a>
      </div>
    </div>
  );
};

export default Hero;
