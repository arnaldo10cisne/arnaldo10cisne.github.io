import React from 'react';
import Hero from './Hero';
import RecentBlogpost from './RecentBlogpost';
import PortfolioHighlights from './PortfolioHighlights';

const HomePage = () => {
  return (
    <>
      <Hero />
      <RecentBlogpost />
      <PortfolioHighlights />
    </>
  );
};

export default HomePage;
