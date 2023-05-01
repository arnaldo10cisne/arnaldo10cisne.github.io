import React from 'react';
import { useParams } from 'react-router-dom';

const Course = () => {
  const { id } = useParams();

  // return <>{`course with id = ${id}`}</>;

  return (
    <section className="grid_container">
      <h1 className="title--b">DEFINITIVE HTML AND CSS</h1>
      <a
        className="certificate_link"
        href="https://drive.google.com/file/d/1WjqyMnDFDCoKVkL1bkJ48VTO6It7WuhI/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png"
          alt="Course badge"
        />
      </a>
      <p id="click-picture">Click on the picture to see the certificate</p>
      <h2 className="section-divider">About this course</h2>
      <div className="general-info-grid">
        <p className="type-column">Instructor</p>
        <a
          href="https://www.instagram.com/degranda/"
          target="_blank"
          rel="noopener noreferrer"
          className="content-column"
        >
          <p className="table-link">Diego De Granda</p>
        </a>
        <p className="type-column">Tech</p>
        <p className="content-column">HTML and CSS</p>
        <p className="type-column">Year</p>
        <p className="content-column">2021</p>
        <p className="type-column">Language</p>
        <p className="content-column">Spanish</p>
      </div>
      <a
        href="https://platzi.com/clases/html-css/"
        target="_blank"
        rel="noopener noreferrer"
        className="button button--grid"
      >
        <p>Check this course!</p>
      </a>
    </section>
  );
};

export default Course;
