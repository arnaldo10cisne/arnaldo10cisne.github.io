import React, { ReactElement } from 'react';
import './App.scss';
import Layout from './components/utilities/Layout/Layout';
import SitePage from './components/utilities/SitePage/SitePage';
import HomePage from './components/pages/HomePage/HomePage';
import Blog from './components/pages/Blog/Blog';
import Blogpost from './components/pages/Blogpost/Blogpost';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Project from './components/pages/Project/Project';
import About from './components/pages/About/About';
import CertificateList from './components/pages/CertificateList/CertificateList';
import Course from './components/pages/Course/Course';
import Contact from './components/pages/Contact/Contact';

const renderContent = (): ReactElement => {
  return (
    <>
      <SitePage path="/" component={<HomePage />} />
      <SitePage path="/blog" component={<Blog />} />
      <SitePage path="/blog/:id" component={<Blogpost />} />
      <SitePage path="/portfolio" component={<Portfolio />} />
      <SitePage path="/portfolio/:id" component={<Project />} />
      <SitePage path="/about" component={<About />} />
      <SitePage path="/about/certificates" component={<CertificateList />} />
      <SitePage path="/about/certificates/:id" component={<Course />} />
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
