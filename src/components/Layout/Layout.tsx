import React, { ReactElement } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface LayoutProps {
  pageToRender: ReactElement;
}

const Layout = ({ pageToRender }: LayoutProps) => {

  return (
    <>
      <Navbar />
      <div>{pageToRender}</div>
      <Footer />
    </>
  );
};

export default Layout;
