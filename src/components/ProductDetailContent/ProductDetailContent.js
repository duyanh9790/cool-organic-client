import { useState, useLayoutEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import ProductDetailSkeleton from '../../components/Skeleton/ProductDetailSkeleton';
import ProductDetailSkeletonMobile from '../Skeleton/ProductDetailSkeletonMobile';
import formatPrice from '../../utils/formatPrice';
import breakPoints from './../../utils/breakPoints';
import { addToCart } from '../../redux/cartSlice';

import './ProductDetailContent.scss';

const ProductDetailContent = ({
  isLoading = false,
  product,
  className = '',
}) => {
  const [currentImage, setCurrentImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (!isLoading) {
      setCurrentImage(product.images[0].url);
    }
  }, [product, isLoading]);

  const handleChangeInputQuantity = (value) => {
    if (value === '') {
      setQuantity('');
    }

    const quantity = parseInt(value);
    const invalidQuantity = Number.isNaN(quantity) || quantity < 1;
    if (invalidQuantity) {
      return;
    }
    if (quantity > product.inventory[0].quantity) {
      toast.info(
        `Chỉ còn ${product.inventory[0].quantity} sản phẩm còn lại cho sản phẩm này`
      );
      setQuantity(product.inventory[0].quantity);
      return;
    }
    setQuantity(quantity);
  };

  const handleBlurInputQuantity = (e) => {
    if (e.target.value === '') {
      setQuantity(1);
    }
  };

  const Skeleton = () => {
    return (
      <Fragment>
        {breakPoints.isMobile() ? (
          <ProductDetailSkeletonMobile />
        ) : (
          <ProductDetailSkeleton />
        )}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${className}`}>
        {isLoading ? (
          <Skeleton />
        ) : (
          <Fragment>
            <div className='flex items-center justify-center w-full'>
              <div className='w-full'>
                <div className='h-full w-full lg:h-[500px] lg:w-[500px] select-none'>
                  <img src={currentImage} alt={product.name} />
                </div>
                <Swiper
                  slidesPerView={3}
                  speed={600}
                  navigation
                  modules={[Navigation]}
                  spaceBetween={12}
                  breakpoints={{
                    1025: {
                      spaceBetween: 20,
                      slidesPerView: 5,
                    },
                  }}
                  className='h-[88px] w-full md:w-[320px] lg:w-[545px] mt-2 lg:mt-4 product-detail-swiper pl-6'
                >
                  {product.images.map((image) => (
                    <SwiperSlide
                      key={image.public_id}
                      className={`w-[88px] h-full border-2 hover:border-primaryColor transition-colors select-none ${
                        currentImage === image.url
                          ? 'border-primaryColor cursor-default'
                          : 'border-borderColor cursor-pointer '
                      }`}
                      onClick={() => setCurrentImage(image.url)}
                    >
                      <img src={image.url} alt='ảnh sản phẩm' />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div>
              <h2 className='text-3xl mb-2.5'>{product.name}</h2>
              <div className='flex flex-col gap-1 mb-2 text-sm md:flex-row md:items-center md:gap-2'>
                <h4>
                  Thương hiệu:
                  <span className='ml-2 text-primaryColor'>
                    {product.supplier}
                  </span>
                </h4>
                <span className='hidden md:inline-block'>|</span>
                <h4>
                  Tình trạng:
                  <span className='ml-2 text-primaryColor'>
                    {product.status === 'active' ? 'Còn hàng' : 'Hết hàng'}
                  </span>
                </h4>
              </div>
              <div className='mb-3.5'>
                {product.discount > 0 ? (
                  <div>
                    <span className='text-2xl font-bold tracking-tighter text-primaryColor'>
                      {formatPrice(product.salePrice)}
                    </span>
                    <span className='text-[#8d90a6] line-through text-sm ml-3'>
                      {formatPrice(product.price)}
                    </span>
                  </div>
                ) : (
                  <span className='text-2xl font-bold text-primaryColor'>
                    {formatPrice(product.salePrice)}
                  </span>
                )}
              </div>
              <h4 className='mb-3 text-sm'>
                Nguồn gốc : <span className='ml-2'>{product.origin}</span>
              </h4>
              <h4 className='mb-4 text-sm'>
                Khối lượng :
                <span className='ml-2'>
                  {Math.round(product.weight / 1000)}kg/ {product.unit}
                </span>
              </h4>
              <p className='text-sm max-w-[520px] w-full text-truncate-6'>
                {product.description}
              </p>
              <hr className='my-6' />
              <div className='flex items-center gap-4 mb-6 lg:gap-5'>
                <span className='text-sm font-bold lg:mr-5'>Số lượng:</span>
                <div className='flex gap-2'>
                  <button
                    className='w-[30px] h-[30px] text-base border border-borderColor hover:border-[#ccc]'
                    onClick={() => handleChangeInputQuantity(quantity - 1)}
                  >
                    <span className='text-sm'>
                      <i className='fa-solid fa-minus'></i>
                    </span>
                  </button>
                  <input
                    type='text'
                    value={quantity}
                    onChange={(e) => handleChangeInputQuantity(e.target.value)}
                    onBlur={(e) => handleBlurInputQuantity(e)}
                    className='w-[50px] h-[30px] text-base border border-borderColor hover:border-[#ccc] text-center focus:border-[#ccc]'
                  />
                  <button
                    className='w-[30px] h-[30px] text-base border border-borderColor hover:border-[#ccc]'
                    onClick={() => handleChangeInputQuantity(quantity + 1)}
                  >
                    <span className='text-sm'>
                      <i className='fa-solid fa-plus'></i>
                    </span>
                  </button>
                </div>
                <div className='tracking-tighter text-textColor lg:ml-2'>
                  <span className='text-[0.9375rem] lg:text-base'>
                    {product.inventory[0].quantity} sản phẩm có sẵn
                  </span>
                </div>
              </div>
              <button
                className='gradient-primary text-white font-bold py-2 px-5 min-w-[270px] text-base mb-4 rounded-full hover:text-primaryColor hover:bg-none border-2 border-transparent hover:border-primaryColor transition-all'
                onClick={() => dispatch(addToCart({ product, quantity: 1 }))}
              >
                Cho vào giỏ hàng
              </button>
              <p className='text-sm'>
                Gọi đặt mua:
                <span className='ml-1 text-primaryColor'>19006750 </span>
                để nhanh chóng đặt hàng
              </p>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

ProductDetailContent.propTypes = {
  product: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
};

export default ProductDetailContent;
