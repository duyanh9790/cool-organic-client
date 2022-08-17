import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const AdminLayout = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
