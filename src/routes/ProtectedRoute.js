import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  return (
    <Fragment>
      <h2>Protected Route</h2>
      {children}
    </Fragment>
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
