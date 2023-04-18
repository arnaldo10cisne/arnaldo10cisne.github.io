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
              <a href={`/blog/${article.id}`} className="articleTitle">
                {article.name}
              </a>
              <p className="articleSample">{article.sample}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
