import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const SectionHomeLayout = ({ title, children, className, path = '/' }) => {
  return (
    <div className={`container pt-14 text-center ${className}`}>
      <h2 className='mb-5'>
        <Link
          to={path}
          className='text-3xl font-medium uppercase text-gradient'
        >
          {title}
        </Link>
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
  path: PropTypes.string,
};

export default SectionHomeLayout;
