import React from 'react';
import spinner from '../../../assets/svg/spinner1.svg'

const LoadingSpinner = () => {
  return <>
    <div className='loading_spinner'>
        <img src={spinner} alt="" />
    </div>
  </>;
};

export default LoadingSpinner;
