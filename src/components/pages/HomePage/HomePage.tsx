import React from 'react';
import Hero from './Hero';
import RecentBlogpost from './RecentBlogpost';
import PortfolioHighlights from './PortfolioHighlights';
import './HomePage.scss';

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
