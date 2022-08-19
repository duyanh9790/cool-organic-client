import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

import useSearchParams from '../../hooks/useSearchParams';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchParams = useSearchParams();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            setCurrentUser({
              currentUser: {
                id: 1,
                name: 'John Doe',
                email: 'abc@gmail.com',
              },
            })
          );
          navigate(`${searchParams.get('redirect')}`);
        }}
      >
        Click here to login
      </button>
    </div>
  );
};

export default Login;
