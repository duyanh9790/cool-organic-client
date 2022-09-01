import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const location = useLocation();
  return (
    <Fragment>
      {currentUser ? (
        children
      ) : (
        <Navigate to={`/login?redirect=${location.pathname}`} />
      )}
    </Fragment>
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
