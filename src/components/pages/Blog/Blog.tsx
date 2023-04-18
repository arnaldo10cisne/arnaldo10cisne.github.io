import React from 'react';
import './Blog.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
import { articleTemplates } from '../../../utilities/placeholderData';

const Blog = () => {
  return (
    <>
      <PageTitle title="Blog" />
      <h2 className="global__section_divider">Articles</h2>
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
