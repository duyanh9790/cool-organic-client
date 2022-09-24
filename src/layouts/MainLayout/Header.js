import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import useCLickOutSide from '../../hooks/useClickOutSide';

import { logo } from '../../assets/images/common';

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

const menuItemsOnMobileTablet = [
  ...menuItems,
  {
    name: 'Đăng nhập',
    path: '/login',
  },
  {
    name: 'Đăng ký',
    path: '/register',
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const inputRef = useRef('');
  const wrapperInputRef = useRef(null);
  useCLickOutSide(wrapperInputRef, () => setShowSearchInput(false));

  const products = useSelector((state) => state.cart.products);
  const navigate = useNavigate();

  useEffect(() => {
    const onKeyDown = (e) => {
      const keyword = inputRef.current.value;
      const isFocus = document.activeElement === inputRef.current;
      if (e.key === 'Enter' && isFocus) {
        navigate(`/search?q=${keyword}`);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div className='container h-[120px] flex items-center justify-between'>
      <div
        className='block cursor-pointer lg:hidden'
        onClick={() => setShowMenu(true)}
      >
        <span className='text-[1.75rem] text-primaryColor '>
          <i className='fas fa-bars'></i>
        </span>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen z-[1000] md:w-[320px] w-[260px] bg-white transition-all duration-300 lg:hidden ${
          showMenu
            ? 'translate-x-0 opacity-100'
            : 'translate-x-[-100%] opacity-100'
        }`}
      >
        <div className='block my-8 text-center'>
          <div className='inline-block'>
            <img src={logo} alt='' />
          </div>
        </div>
        <div className='flex flex-col items-center mt-3'>
          {menuItemsOnMobileTablet.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`h-full block w-full pl-4 py-4 border-t border-borderColor last:border-b text-lg ${
                window.location.pathname === item.path
                  ? 'text-white bg-primaryColor'
                  : 'text-black bg-white'
              }`}
              onClick={() => setShowMenu(false)}
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black transition-all duration-300 z-[100] lg:hidden ${
          showMenu ? 'visible opacity-[0.65]' : 'invisible opacity-0'
        }`}
        onClick={() => setShowMenu(false)}
      ></div>

      <Link to='/' className='w-[50%] md:w-[auto]'>
        <img src={logo} alt='Logo' />
      </Link>

      <ul className='items-center hidden h-full gap-3 lg:flex'>
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
        <div className='relative cursor-pointer group' ref={wrapperInputRef}>
          <i
            className='md:pl-4 md:p-2 fa-solid fa-magnifying-glass'
            onClick={() => setShowSearchInput(!showSearchInput)}
          ></i>
          <div
            className={`absolute text-black right-[-12px] top-10 lg:group-hover:block lg:hidden w-[250px] z-10 ${
              showSearchInput ? 'block' : 'hidden'
            }`}
          >
            <div className='absolute top-[-20px] right-4 w-14 h-6 bg-transparent hidden lg:block'></div>
            <input
              type='text'
              ref={inputRef}
              placeholder='Tìm kiếm...'
              className='py-2.5 pl-4 pr-10 border-2 rounded-full shadow-md border-primaryColor'
            />
            <div
              className='absolute top-[30%] pb-2 right-8 h-full z-2'
              onClick={() => navigate(`/search?q=${inputRef.current.value}`)}
            >
              <i className='fa-solid fa-magnifying-glass'></i>
            </div>
          </div>
        </div>
        <div className='relative hidden cursor-pointer lg:block group'>
          <i className='p-2 fa-solid fa-user-plus'></i>
          <div className='absolute h-5 bg-transparent top-6 right-[20%] w-10 z-[101]'></div>
          <div className='absolute top-10 hidden p-2.5 rounded-xl group-hover:block w-56 right-[20%] z-[100] border border-primaryColor shadow bg-white'>
            <Link
              className='block w-full h-full py-2 mb-2 text-base text-center text-white rounded-full gradient-primary hover:bg-primaryColor hover:bg-none'
              to='/login'
            >
              Đăng nhập
            </Link>
            <Link
              className='block w-full h-full py-2 text-base text-center text-black border rounded-full hover:text-white hover:bg-primaryColor hover:bg-none border-borderColor'
              to='/register'
            >
              Đăng ký
            </Link>
          </div>
        </div>
        <div className='mr-3.5 ml-2.5 md:ml-0'>
          <Link to='/cart' className='relative'>
            <i className='md:p-1.5 fa-solid fa-cart-shopping'></i>
            <span className='gradient-primary absolute text-white text-xs bottom-[80%] left-[50%] top-[-70%] w-[26px] h-[26px] rounded-full flex items-center justify-center'>
              {products.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
