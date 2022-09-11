import { useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Routers from './routes/Routers';
import handleLocalStorage from './utils/handleLocalStorage';
import handleAuthToken from './utils/handleAuthToken';
import { removeCurrentUser, setCurrentUser } from './redux/userSlice';
import authApi from './api/authApi';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = handleLocalStorage.get('accessToken');
      if (accessToken) {
        handleAuthToken(accessToken);
      }
      try {
        const res = await authApi.getCurrentUser();
        if (!res.data.user) {
          return;
        }
        dispatch(setCurrentUser(res.data.user));
      } catch (error) {
        removeCurrentUser();
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.search, location.pathname]);

  return (
    <Fragment>
      <Routers />
    </Fragment>
  );
}

export default App;
