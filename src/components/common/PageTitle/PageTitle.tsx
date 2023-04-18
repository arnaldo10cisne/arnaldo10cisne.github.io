import React from 'react';
import './PageTitle.scss';

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="global__page_container">
      <h1 className="global__page_title">{title}</h1>
    </div>
  );
};

export default PageTitle;
