import React, { ReactElement } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';

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
