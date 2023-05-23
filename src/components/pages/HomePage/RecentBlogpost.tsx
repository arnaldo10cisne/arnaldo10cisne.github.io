import React from 'react';

const RecentBlogpost = () => {
  return (
    <>
      <h2 className="global__section_divider" style={{ marginTop: '-10px' }}>
        Recent Blogposts
      </h2>

      <div className="article-sample-container">
        <p className="article-date">September. 2021</p>
        <a href="./articles-files/september-2021">
          <h3 className="home-link article-title">
            Working from home, living from home
          </h3>
        </a>
        <p className="article-sample">
          The pandemic that started in the first quarter of 2020, due to the
          SARS-CoV-2 virus, has been and continues to be, an event that will
          mark a before and after in our lives, not only as individuals but also
          as a society.
        </p>
      </div>
    </>
  );
};

export default RecentBlogpost;
