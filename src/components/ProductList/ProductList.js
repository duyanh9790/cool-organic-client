import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './../ProductCard';

const ProductList = ({ productList, className = '' }) => {
  return (
    <div
      className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ${className}`}
    >
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  productList: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default ProductList;
