import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import formatPrice from './../../utils/formatPrice';
import { addToCart } from './../../redux/cartSlice';
import ProductConfirmModal from '../Modal/ProductConfirmModal';
import ProductDetailModal from '../Modal/ProductDetailModal';

const ProductCard = ({ product }) => {
  const [showProductConfirmModal, setShowProductConfirmModal] = useState(false);
  const [showProductDetailModal, setShowProductDetailModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className='relative overflow-hidden transition-all border rounded hover:shadow-xl border-borderColor group'>
      <Link
        to={`/products/${product.slug}`}
        className='flex items-center justify-center select-none hover:opacity-60'
      >
        <img src={product.images[0]?.url} alt={product.name} />
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
              {formatPrice(product.salePrice)}
            </span>
            <span className='text-sm font-bold line-through text-textColor'>
              {formatPrice(product.price)}
            </span>
          </div>
        ) : (
          <div className='mt-2'>
            <span className='text-base font-bold text-primaryColor'>
              {formatPrice(product.salePrice)}
            </span>
          </div>
        )}
      </div>

      <div
        className={`absolute hidden xl:flex gap-1 bottom-[30%] left-[50%] translate-x-[-50%] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all`}
      >
        <div
          className='w-[40px] h-[40px] rounded-full hover:bg-primaryColor hover:text-white text-black bg-white opacity-90 hover:opacity-100 transition-all shadow-md flex items-center justify-center text-sm cursor-pointer'
          onClick={() => {
            dispatch(
              addToCart({
                product,
                quantity: 1,
              })
            );
            setShowProductConfirmModal(true);
          }}
        >
          <i className='fa-solid fa-cart-shopping'></i>
        </div>
        <div
          className='w-[40px] h-[40px] rounded-full hover:bg-primaryColor hover:text-white text-black bg-white opacity-90 hover:opacity-100 transition-all shadow-md flex items-center justify-center text-sm cursor-pointer'
          onClick={() => setShowProductDetailModal(true)}
        >
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
      </div>

      <ProductConfirmModal
        product={product}
        showModal={showProductConfirmModal}
        handleCloseModal={() => setShowProductConfirmModal(false)}
        classContainer={product.slug}
      />

      <ProductDetailModal
        product={product}
        showModal={showProductDetailModal}
        handleCloseModal={() => setShowProductDetailModal(false)}
        classContainer={product.slug}
      />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
