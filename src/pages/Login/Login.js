import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { facebookBtn, googleBtn } from '../../assets/images/socials';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import useSearchParams from './../../hooks/useSearchParams';
import { setCurrentUser } from '../../redux/userSlice';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Login = () => {
  const schema = yup.object({
    email: yup
      .string()
      .required('Email là bắt buộc')
      .email('Vui lòng nhập đúng email'),
    password: yup
      .string()
      .required('Mật khẩu là bắt buộc')
      .min(8, 'Mật khẩu phải tối thiểu 8 kí tự'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleLogin = (values) => {
    console.log(values);
    dispatch(
      setCurrentUser({
        currentUser: {
          id: 1,
          name: 'John Doe',
          email: 'abc@gmail.com',
        },
      })
    );
    if (searchParams.get('redirect')) {
      navigate(searchParams.get('redirect'));
    } else {
      navigate('/');
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchParams = useSearchParams();

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className='w-full max-w-[540px] p-4 mx-auto my-10 text-center'
    >
      <div>
        <h3 className='uppercase text-[26px] mb-6'>Đăng nhập tài khoản</h3>
        <div className='flex gap-1 justify-center mb-7'>
          <div className='max-w-[129px] w-full hover:opacity-80 cursor-pointer'>
            <img src={facebookBtn} alt='Login with Facebook' />
          </div>
          <div className='max-w-[129px] w-full hover:opacity-80 cursor-pointer'>
            <img src={googleBtn} alt='Login with Google' />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-[18px]'>
        <div>
          <input
            type='text'
            name='email'
            className='bg-white block w-full py-2.5 px-6 text-black border border-borderColor outline-none min-h-[50px] rounded-full'
            placeholder='Email'
            {...register('email')}
            autoComplete='username'
          />
          <span className='block text-left text-red-500 mt-1 ml-3'>
            {errors.email?.message}
          </span>
        </div>
        <div>
          <input
            type='password'
            name='password'
            className='bg-white block w-full py-2.5 px-6 text-black border border-borderColor outline-none min-h-[50px] rounded-full'
            placeholder='Mật khẩu'
            {...register('password')}
            autoComplete='current-password'
          />
          <span className='block text-left text-red-500 mt-1 ml-3'>
            {errors.password?.message}
          </span>
        </div>
        <button
          type='submit'
          className='block w-full text-white bg-gradient-to-r from-primary to-secondary py-4 rounded-full hover:bg-primary hover:bg-none'
        >
          Đăng nhập
        </button>
      </div>

      <div>
        <p className='underline text-primary text-[15px] cursor-pointer mt-4'>
          Quên mật khẩu
        </p>

        <p className='mt-6 text-textColor'>
          Bạn chưa có tài khoản? vui lòng đăng ký
          <Link to='/register'>
            <span className='underline ml-1 '>tại đây</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
