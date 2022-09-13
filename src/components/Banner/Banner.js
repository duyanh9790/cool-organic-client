import React from 'react';

import { backgroundBreadCrumb } from '../../assets/images/common';

const Banner = ({ children }) => {
  return (
    <div
      className='py-14 flex items-center justify-center mb-10'
      style={{
        backgroundImage: `url(${backgroundBreadCrumb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
};

export default Banner;
