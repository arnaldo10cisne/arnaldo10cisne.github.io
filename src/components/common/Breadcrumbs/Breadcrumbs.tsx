import React from 'react';
import './Breadcrumbs.scss';
import { breadcrumbsLink } from '../../../utilities/models';

interface BreadcrumbsProps {
  pageList: breadcrumbsLink[];
}

export const Breadcrumbs = ({ pageList }: BreadcrumbsProps) => {
  return (
    <div className="breadcrumbsContainer">
      {pageList.map((page) => {
        const isLastPage = pageList.indexOf(page) === pageList.length - 1;

        return (
          <a
            className={`breadcrumbsLink_basic breadcrumbsLevel_${page.level} ${
              isLastPage && 'breadcrumbsLevel_current'
            }`}
            href={`${isLastPage ? '#' : `${page.to}`}`}
          >
            {page.label}
          </a>
        );
      })}
    </div>
  );
};
