import React, { ReactElement } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

interface SitePageProps {
  component: ReactElement;
  path: string;
}

const SitePage = ({ component, path }: SitePageProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={component} path={path} />
      </Routes>
    </BrowserRouter>
  );
};

export default SitePage;
