import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
