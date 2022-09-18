import PropTypes from 'prop-types';

import './Loading.scss';

const LoadingCenter = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className='loader-spinner'> </div>
    </div>
  );
};

LoadingCenter.propTypes = {
  className: PropTypes.string,
};

export default LoadingCenter;
