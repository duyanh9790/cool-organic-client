import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import userApi from '../../api/userApi';
import formatDate from '../../utils/formatDate';
import { setCurrentUser } from '../../redux/userSlice';

const UserInfoContent = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const inputFullNameRef = useRef();
  const [showFullNameInput, setShowFullNameInput] = useState(false);

  const handleChangeFullName = async (fullName) => {
    try {
      const res = await userApi.updateUser({ fullName });
      const user = res.data.user;
      const currentUser = {
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      };
      dispatch(setCurrentUser(currentUser));

      toast.success('Cập nhật thông tin thành công');
    } catch (error) {
      toast.error('Cập nhật thông tin thất bại, Vui lòng thử lại sau!');
    }
  };

  return (
    <div>
      <h3 className='mb-5 text-xl font-medium uppercase'>
        Thông tin tài khoản
      </h3>
      <div className='mb-4'>
        <span className='font-bold'>Họ tên: </span>
        <span>{currentUser.fullName}</span>
        <button
          className={`ml-3 text-sm hover:opacity-[0.65] transition-opacity ${
            showFullNameInput && 'hidden'
          }`}
          onClick={() => setShowFullNameInput(true)}
        >
          <i className='fas fa-pen'></i>
        </button>
        <form
          className={`ml-3 ${showFullNameInput ? 'inline-block' : 'hidden'}`}
          onSubmit={(e) => {
            e.preventDefault();
            if (inputFullNameRef.current.value.trim() === '') {
              toast.info('Vui lòng nhập họ tên!');
              return;
            }
            handleChangeFullName(inputFullNameRef.current.value);
            inputFullNameRef.current.value = '';
            setShowFullNameInput(false);
          }}
        >
          <input
            type='text'
            className='w-[250px] px-3.5 py-2 rounded-full border-2 border-primaryColor'
            ref={inputFullNameRef}
          />
          <button
            className='text-xl p-1 hover:opacity-[0.65] transition-opacity ml-3'
            type='submit'
          >
            <i className='fas fa-check'></i>
          </button>
          <button
            className='text-xl p-1 hover:opacity-[0.65] transition-opacity ml-2.5'
            type='button'
            onClick={() => {
              inputFullNameRef.current.value = '';
              setShowFullNameInput(false);
            }}
          >
            <i className='fa-solid fa-xmark'></i>
          </button>
        </form>
      </div>
      <div className='mb-4'>
        <span className='font-bold'>Email: </span>
        <span>{currentUser.email}</span>
      </div>
      <div>
        <span className='font-bold'>Ngày tạo tài khoản: </span>
        <span>{formatDate(currentUser.createdAt)}</span>
      </div>
    </div>
  );
};

export default UserInfoContent;
