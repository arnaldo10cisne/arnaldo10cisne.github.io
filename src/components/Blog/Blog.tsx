import React from 'react';
import './Blog.scss';

// This should be replaced by a network call to a backend holding the articles
const articleTemplates = [
  {
    name: 'Working from home, living from home',
    date: 'September. 2021',
    sample:
      'The pandemic that started in the first quarter of 2020, due to the SARS-CoV-2 virus, has been and continues to be, an event that will mark a before and after in our lives, not only as individuals but also as a society.',
  },
  {
    name: 'This website is a finished product',
    date: 'June. 2021',
    sample:
      'This website is not a finished product. Not by any chance. But it is an exciting work in progress.',
  },
];

const Blog = () => {
  return (
    <>
      <h1 className="general__page_title">Blog</h1>
      <h2 className="general__section_divider">Articles</h2>
      {articleTemplates.map((article) => {
        return (
          <>
            <p>{article.date}</p>
            <h3>{article.name}</h3>
            <p>{article.sample}</p>
          </>
        );
      })}
    </>
  );
};

export default Blog;
