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
        console.log('set auth token');
      }
      try {
        const currentUser = await authApi.getCurrentUser();
        if (!currentUser) {
          return;
        }
        dispatch(setCurrentUser(currentUser));
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
