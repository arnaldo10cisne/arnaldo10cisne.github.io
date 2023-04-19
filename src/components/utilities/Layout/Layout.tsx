import React, { ReactElement } from 'react';
import Navbar from '../../common/Navbar/Navbar';
import Footer from '../../common/Footer/Footer';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import './Layout.scss';
import { breadcrumbsTemplate } from '../../../utilities/placeholderData';

interface LayoutProps {
  pageToRender: ReactElement;
}

const Layout = ({ pageToRender }: LayoutProps) => {
  const pathname = window.location.pathname;

  return (
    <div className="body">
      <Navbar />
      <div className="pageContainer">
        {pathname !== '/' && <Breadcrumbs pageList={breadcrumbsTemplate} />}
        {pageToRender}
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
