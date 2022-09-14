import React from 'react';
import { Link } from 'react-router-dom';

import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
} from '../../assets/images/common';
import SectionHomeLayout from './SectionHomeLayout';

const brandList = [
  {
    imageUrl: brand1,
    path: '/',
  },
  {
    imageUrl: brand2,
    path: '/',
  },
  {
    imageUrl: brand3,
    path: '/',
  },
  {
    imageUrl: brand4,
    path: '/',
  },
  {
    imageUrl: brand5,
    path: '/',
  },
  {
    imageUrl: brand6,
    path: '/',
  },
];

const TopBrand = () => {
  return (
    <SectionHomeLayout title='Top thương hiệu'>
      <div className='scroll-snap-list container flex gap-14 lg:justify-center mx-3 lg:mx-auto mt-5'>
        {brandList.map((brand, index) => (
          <Link
            key={index}
            to={brand.path}
            className='scroll-snap-item hover:opacity-80 transition-all shrink-0'
          >
            <img src={brand.imageUrl} alt='' />
          </Link>
        ))}
      </div>
    </SectionHomeLayout>
  );
};

export default TopBrand;
