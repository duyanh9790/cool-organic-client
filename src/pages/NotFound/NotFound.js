import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../../components/Banner';
import { BackgroundNotFound } from '../../assets/images/common';

const NotFound = () => {
  return (
    <div>
      <Banner>
        <h1 className='text-4xl font-bold'>Không tìm thấy trang này</h1>
      </Banner>
      <div className='container flex flex-col items-center justify-center'>
        <div className='h-[600px]'>
          <img src={BackgroundNotFound} alt='NOT FOUND PAGE' />
        </div>
        <h2 className='mt-6 text-lg'>
          Trang này hiện không có hoặc đã bị gỡ! Vui lòng quay lại
          <Link to='/' className='ml-1.5 text-xl text-primaryColor'>
            trang chủ
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
