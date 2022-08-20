import React from 'react';
import { Link } from 'react-router-dom';

import { facebookBtn, googleBtn } from '../../assets/images/socials';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Register = () => {
  const schema = yup.object({
    fullName: yup.string().required('Họ tên là bắt buộc'),
    email: yup
      .string()
      .required('Email là bắt buộc')
      .email('Vui lòng nhập đúng email'),
    password: yup
      .string()
      .required('Mật khẩu là bắt buộc')
      .min(8, 'Mật khẩu phải tối thiểu 8 kí tự'),
    confirmPassword: yup.string().required('Vui lòng nhập lại mật khẩu'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleRegister = (values) => {
    console.log(values);
  };

  console.log('errors: ', errors);

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className='w-full max-w-[540px] p-4 mx-auto my-10 text-center'
    >
      <div className=''>
        <h3 className='uppercase text-[26px] mb-6'>Đăng ký tài khoản</h3>
        <div className='flex gap-1 justify-center mb-7'>
          <div className='max-w-[129px] w-full hover:opacity-80 cursor-pointer'>
            <img src={facebookBtn} alt='Register with Facebook' />
          </div>
          <div className='max-w-[129px] w-full hover:opacity-80 cursor-pointer'>
            <img src={googleBtn} alt='Register with Google' />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-[18px]'>
        <div>
          <input
            type='text'
            name='fullName'
            className='bg-white block w-full py-2.5 px-6 text-black border border-borderColor outline-none min-h-[50px] rounded-full'
            placeholder='Họ và tên'
            {...register('fullName')}
            autoComplete='fullName'
          />
          <span className='block text-left text-red-500 mt-1 ml-3'>
            {errors.fullName?.message}
          </span>
        </div>
        <div>
          <input
            type='text'
            name='email'
            className='bg-white block w-full py-2.5 px-6 text-black border border-borderColor outline-none min-h-[50px] rounded-full'
            placeholder='Email'
            {...register('email')}
            autoComplete='email'
          />
          <span className='block text-left text-red-500 mt-1 ml-3'>
            {errors.email?.message}
          </span>
        </div>
        <div>
          <input
            type='password'
            className='bg-white block w-full py-2.5 px-6 text-black border border-borderColor outline-none min-h-[50px] rounded-full'
            placeholder='Mật khẩu'
            {...register('password')}
            autoComplete='current-password'
          />
          <span className='block text-left text-red-500 mt-1 ml-3'>
            {errors.password?.message}
          </span>
        </div>
        <div>
          <input
            type='password'
            name='confirmPassword'
            className='bg-white block w-full py-2.5 px-6 text-black border border-borderColor outline-none min-h-[50px] rounded-full'
            placeholder='Nhập lại mật khẩu'
            {...register('confirmPassword')}
            autoComplete='confirmPassword'
          />
          <span className='block text-left text-red-500 mt-1 ml-3'>
            {errors.confirmPassword?.message}
          </span>
        </div>
        <button
          type='submit'
          className='block w-full text-white bg-gradient-to-r from-primary to-secondary py-4 rounded-full hover:bg-primary hover:bg-none '
        >
          Đăng ký
        </button>
      </div>

      <div>
        <p className='mt-6 text-textColor'>
          Bạn đã có tài khoản? vui lòng đăng nhập
          <Link to='/login'>
            <span className='underline ml-1 '>tại đây</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
