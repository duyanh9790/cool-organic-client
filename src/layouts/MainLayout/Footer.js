import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets/images/common';

const footerItems = [
  {
    title: 'Cảm Nang Sử Dụng',
    items: [
      {
        name: 'Trang chủ',
        path: '/',
      },
      {
        name: 'Giới thiệu',
        path: '/',
      },
      {
        name: 'Sản phẩm',
        path: '/',
      },
      {
        name: 'Tin tức',
        path: '/',
      },
      {
        name: 'Liên hệ',
        path: '/',
      },
    ],
  },
  {
    title: 'Chính Sách',
    items: [
      {
        name: 'Trang chủ',
        path: '/',
      },
      {
        name: 'Giới thiệu',
        path: '/',
      },
      {
        name: 'Sản phẩm',
        path: '/',
      },
      {
        name: 'Tin tức',
        path: '/',
      },
      {
        name: 'Liên hệ',
        path: '/',
      },
    ],
  },
  {
    title: 'Dịch Vụ',
    items: [
      {
        name: 'Trang chủ',
        path: '/',
      },
      {
        name: 'Giới thiệu',
        path: '/',
      },
      {
        name: 'Sản phẩm',
        path: '/',
      },
      {
        name: 'Tin tức',
        path: '/',
      },
      {
        name: 'Liên hệ',
        path: '/',
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className='mt-14'>
      <div className='bg-[#e8dac7] py-[60px]'>
        <div className='container flex items-center justify-between'>
          <div className='w-[60%] pr-4'>
            <h3 className='text-3xl font-bold text-left'>
              Đăng kí nhận tin khuyến mãi
            </h3>
          </div>
          <div className='relative h-11 w-[40%]'>
            <input
              type='text'
              placeholder='Nhập email của bạn'
              className='w-full h-full pl-4 border rounded-full border-borderColor pr-28'
            />
            <button className='absolute top-0 right-0 block h-full px-6 text-sm text-white rounded-full gradient-primary hover:bg-primaryColor'>
              Đăng ký
            </button>
          </div>
        </div>
      </div>
      <div className='container grid grid-cols-4 gap-8 py-12 bg-white'>
        <div>
          <Link to='/' className='w-[195px] h-[63px] mb-6 block'>
            <img src={logo} alt='Logo' />
          </Link>
          <div className='flex items-center'>
            <div className='w-[30px] flex-shrink-0 flex items-center justify-center mr-1'>
              <i className='fas fa-map-marker-alt text-primaryColor'></i>
            </div>
            <p>
              Toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Quận Ba Đình, Hà
              Nội
            </p>
          </div>
          <div className='flex items-center mt-4'>
            <div className='w-[30px] flex-shrink-0 flex items-center justify-center mr-1'>
              <i className='fa-solid fa-mobile-screen-button text-primaryColor'></i>
            </div>
            <p>1900 1560</p>
          </div>
          <div className='flex items-center mt-4'>
            <div className='w-[30px] flex-shrink-0 flex items-center justify-center mr-1'>
              <i className='fa-solid fa-envelope text-primaryColor'></i>
            </div>
            <p>support@contact.com</p>
          </div>
        </div>

        {footerItems.map((footerItem, index) => (
          <div key={index}>
            <h3 className='mb-5 text-sm font-bold uppercase'>
              {footerItem.title}
            </h3>
            {footerItem.items.map((item, index) => (
              <div key={index} className='my-3'>
                <Link to={item.path} className='h-6 hover:text-primaryColor'>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
