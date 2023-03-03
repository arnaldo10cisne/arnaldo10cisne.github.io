import React, { ReactElement } from 'react';
import './App.scss';
import Layout from './components/Layout/Layout';
import SitePage from './components/SitePage/SitePage';
import HomePage from './components/HomePage/HomePage';
import Blog from './components/Blog/Blog';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const renderContent = (): ReactElement => {
  return (
    <>
      <SitePage path="/" component={<HomePage />} />
      <SitePage path="/blog" component={<Blog />} />
      <SitePage path="/portfolio" component={<Portfolio />} />
      <SitePage path="/about" component={<About />} />
      <SitePage path="/contact" component={<Contact />} />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Layout pageToRender={renderContent()} />
    </div>
  );
}

export default App;
