import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import { banner1 as bannerImgUrl1 } from '../../assets/images/common';

const listImages = [
  {
    id: 1,
    imageUrl: bannerImgUrl1,
  },
  {
    id: 2,
    imageUrl: bannerImgUrl1,
  },
];

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop
      speed={600}
      navigation
      pagination
      className='banner'
      modules={[Navigation, Pagination]}
    >
      {listImages.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.imageUrl} alt='banner' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
