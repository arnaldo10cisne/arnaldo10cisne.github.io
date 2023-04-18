import React, { ReactElement } from 'react';
import Navbar from '../../common/Navbar/Navbar';
import Footer from '../../common/Footer/Footer';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import './Layout.scss';

interface LayoutProps {
  pageToRender: ReactElement;
}

const Layout = ({ pageToRender }: LayoutProps) => {
  const pathname = window.location.pathname;

  return (
    <div className="body">
      <Navbar />
      <div className="pageContainer">
        {pathname !== '/' && <Breadcrumbs />}
        {pageToRender}
        <div className="footerContainer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
