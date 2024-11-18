import React, { ReactElement } from 'react';
import Navbar from '../../common/Navbar/Navbar';
import Footer from '../../common/Footer/Footer';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import './Layout.scss';
import NavbarMobile from '../../common/Navbar/NavbarMobile';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

interface BreadcrumbItem {
  label: string;
  to: string;
  level: number;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  const isHomePage = pathname === '/';

  const breadcrumbsGenerator = (): BreadcrumbItem[] => {
    const additionalBreadcrumbs = [];
    const pathSegments = pathname.split('/').slice(1);
    const isCertificates = pathSegments.includes('certificates');
    const isPortfolio = pathSegments.includes('portfolio');
    const lastSegment = pathSegments.at(-1) || '';
    const lastSegmentIsNumber = /\d/.test(lastSegment);

    if (isCertificates) {
      additionalBreadcrumbs.push({
        label: 'Certificates',
        to: '/about/certificates',
        level: 2,
      });
    }

    if (lastSegmentIsNumber) {
      let label: string;
      let to: string;
      let level: number;

      if (isCertificates) {
        label = 'Course';
        to = `/about/certificates/${lastSegment}`;
        level = 3;
      } else if (isPortfolio) {
        label = 'Project';
        to = `/portfolio/${lastSegment}`;
        level = 2;
      } else {
        label = 'Article';
        to = `/${pathSegments.join('/')}`;
        level = 2;
      }

      additionalBreadcrumbs.push({ label, to, level });
    }

    return [
      {
        label: 'Home',
        to: '/',
        level: 0,
      },
      {
        label:
          pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1),
        to: `/${pathSegments[0]}`,
        level: 1,
      },
      ...additionalBreadcrumbs,
    ];
  };

  return (
    <div className={`body ${isHomePage ? 'homePageBackgroundImage' : ''}`}>
      <div className="navbarContainer">
        <Navbar />
      </div>
      <div className="navbarMobileContainer">
        <NavbarMobile />
      </div>
      <div className="pageContainer">
        {isHomePage && <div className="homepageCurtain" />}
        {!isHomePage && <Breadcrumbs pageList={breadcrumbsGenerator()} />}
        {children}
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
