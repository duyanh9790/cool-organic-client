import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import formatPrice from './../../utils/formatPrice';
import calculatePrice from '../../utils/calculatePrice';

const ProductCard = ({ product }) => {
  return (
    <div className='overflow-hidden transition-all border rounded hover:shadow-xl border-borderColor'>
      <Link
        to={`/products/${product.slug}`}
        className='flex items-center justify-center hover:opacity-60'
      >
        <img src={product.imageUrl} alt={product.name} />
      </Link>
      <div className='p-6 flex flex-col items-center bg-[#f5f6fb]'>
        <Link
          to={`/products/${product.slug}`}
          className='font-bold hover:text-primaryColor'
        >
          {product.name}
        </Link>
        {product.discount > 0 ? (
          <div className='mt-2'>
            <span className='mr-2 text-base font-bold text-primaryColor'>
              {formatPrice(calculatePrice(product.price, product.discount))}
            </span>
            <span className='text-sm font-bold line-through text-textColor'>
              {formatPrice(product.price)}
            </span>
          </div>
        ) : (
          <div className='mt-2'>
            <span className='text-base font-bold text-primaryColor'>
              {formatPrice(product.price)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
