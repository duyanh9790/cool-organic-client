import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

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
