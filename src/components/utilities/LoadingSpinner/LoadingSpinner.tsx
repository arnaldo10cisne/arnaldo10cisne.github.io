import React from 'react';
import spinner from '../../../assets/svg/spinner1.svg';

const LoadingSpinner = () => {
  return (
    <>
      <div className="loading_spinner" data-testid="loading-spinner">
        <img src={spinner} alt="" />
      </div>
    </>
  );
};

export default LoadingSpinner;
