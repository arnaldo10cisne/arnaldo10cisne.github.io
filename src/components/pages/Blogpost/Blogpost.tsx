import React from 'react';
import { useParams } from 'react-router-dom';
import { articleTemplates } from '../../../utilities/placeholderData';

const Blogpost = () => {
  const { id } = useParams();

  const articleToDisplay = articleTemplates.find((article) => {
    // FINAL LOGIC
    // return article.id === id

    // TESTING PURPOSES
    return article.id === 2;
  });

  return (
    <div>
      <section className="article_picture">
        <img
          className="article_picture__img"
          src={`${articleToDisplay?.cover_image}`}
          alt="article image"
        />
        <p></p>
      </section>

      <section className="article_section">
        <h1 className="article_title">{articleToDisplay?.name}</h1>
        <p id="article-date">{articleToDisplay?.date}</p>
        <p id="ownership">by Arnaldo Cisneros</p>
        <article
          dangerouslySetInnerHTML={{ __html: `${articleToDisplay?.article}` }}
        ></article>
      </section>
    </div>
  );
};

export default Blogpost;
