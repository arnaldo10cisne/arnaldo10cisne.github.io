import React, { ReactElement } from 'react';
import Navbar from '../../common/Navbar/Navbar';
import Footer from '../../common/Footer/Footer';
import NavigationBar from '../../common/NavigationBar/NavigationBar';

interface LayoutProps {
  pageToRender: ReactElement;
}

const Layout = ({ pageToRender }: LayoutProps) => {
  const pathname = window.location.pathname;

  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop: '61px',
        }}
      >
        {pathname !== '/' && <NavigationBar />}
        {pageToRender}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
