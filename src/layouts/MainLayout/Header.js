import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/common/logo.png';

const menuItems = [
  {
    name: 'Trang chủ',
    path: '/',
  },
  {
    name: 'Giới thiệu',
    path: '/introduce',
  },
  {
    name: 'Sản phẩm',
    path: '/products',
  },
  {
    name: 'Liên hệ',
    path: '/contact',
  },
];

const Header = () => {
  return (
    <div className='container h-[120px] flex items-center justify-between'>
      <Link to='/' className='w-48 h-16'>
        <img src={logo} alt='Logo' />
      </Link>
      <ul className='flex items-center h-full gap-3'>
        {menuItems.map((item, index) => (
          <li className='h-full' key={index}>
            <Link
              to={item.path}
              className={`block h-full leading-[120px] px-2.5 hover:text-primaryColor ${
                window.location.pathname === item.path
                  ? 'text-primaryColor'
                  : 'text-black'
              }`}
            >
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className='flex items-center gap-4'>
        <div className='cursor-pointer'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
        <div>
          <i className='fa-solid fa-user-plus'></i>
        </div>
        <div>
          <Link to='/cart' className='relative'>
            <i className='fa-solid fa-cart-shopping'></i>
            <span className='gradient-primary absolute text-white text-xs bottom-[80%] left-[50%] top-[-70%] w-[26px] h-[26px] rounded-full flex items-center justify-center'>
              0
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
