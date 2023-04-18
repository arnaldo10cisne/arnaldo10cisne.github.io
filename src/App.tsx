import React, { ReactElement } from 'react';
import './App.scss';
import Layout from './components/utilities/Layout/Layout';
import SitePage from './components/utilities/SitePage/SitePage';
import HomePage from './components/pages/HomePage/HomePage';
import Blog from './components/pages/Blog/Blog';
import Portfolio from './components/pages/Portfolio/Portfolio';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';

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
