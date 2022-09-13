import React from 'react';
import { PropTypes } from 'prop-types';

const SectionHomeLayout = ({ title, children, className }) => {
  return (
    <div className={`container pt-14 text-center ${className}`}>
      <h2 className='pb-5 text-3xl font-medium uppercase text-gradient'>
        {title}
      </h2>
      <span className='inline-block icon-green mb-4'></span>
      <div>{children}</div>
    </div>
  );
};

SectionHomeLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SectionHomeLayout;
