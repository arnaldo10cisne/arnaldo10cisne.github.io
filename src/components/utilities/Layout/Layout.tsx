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
  const isHomePage = pathname === '/';

  const breadcrumbsGenerator = () => {
    let addedLevels = [];
    const pathList = pathname.split('/');
    pathList.shift();

    if (pathList.includes('certificates')) {
      addedLevels.push({
        label: 'Certificates',
        to: '/about/certificates',
        level: 2,
      });
    }

    if (/\d/.test(pathList.at(-1) || '')) {
      addedLevels.push({
        label: pathList.includes('certificates')
          ? 'Course'
          : pathList.includes('portfolio')
          ? 'Project'
          : 'Article',
        to: pathList.includes('certificates')
          ? `/about/certificates/${pathList.at(-1)}`
          : pathList.includes('portfolio')
          ? `/portfolio/${pathList.at(-1)}`
          : `/blog/${pathList.at(-1)}`,
        level: pathList.includes('certificates') ? 3 : 2,
      });
    }

    return [
      {
        label: 'Home',
        to: '/',
        level: 0,
      },
      {
        label: pathList[0].charAt(0).toUpperCase() + pathList[0].slice(1),
        to: `/${pathList[0]}`,
        level: 1,
      },
      ...addedLevels,
    ];
  };

  return (
    <div className={`body ${!isHomePage && 'nonHomepageBody'}`}>
      <Navbar />
      <div className="pageContainer">
        {isHomePage && <div className="homepageCurtain" />}
        {!isHomePage && <Breadcrumbs pageList={breadcrumbsGenerator()} />}
        {pageToRender}
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
