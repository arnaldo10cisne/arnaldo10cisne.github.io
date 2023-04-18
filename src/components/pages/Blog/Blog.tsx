import React from 'react';
import './Blog.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
import { articleTemplates } from '../../../utilities/placeholderData';

const Blog = () => {
  return (
    <>
      <PageTitle title="Blog" />
      <h2 className="global__section_divider">Articles</h2>
      <div className="articleList">
        {articleTemplates.map((article) => {
          return (
            <div className="global__page_container articleContainer">
              <p className="articleDate">{article.date}</p>
              <h3 className="articleTitle">{article.name}</h3>
              <p className="articleSample">{article.sample}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
