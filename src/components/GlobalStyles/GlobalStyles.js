import React from 'react';
import PropTypes from 'prop-types';

const GlobalStyles = ({ children }) => {
  return <div>{children}</div>;
};

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
