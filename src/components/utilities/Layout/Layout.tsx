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
  const isHomePage = pathname === '/';

  return (
    <div className={`body ${!isHomePage && 'nonHomepageBody'}`}>
      <Navbar />
      <div className="pageContainer">
        {isHomePage && <div className="homepageCurtain" />}
        {!isHomePage && <Breadcrumbs pageList={breadcrumbsTemplate} />}
        {pageToRender}
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
