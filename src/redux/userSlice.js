import { createSlice } from '@reduxjs/toolkit';
import handleLocalStorage from './../utils/handleLocalStorage';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeCurrentUser: (state) => {
      handleLocalStorage.remove('accessToken');
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, removeCurrentUser } = userSlice.actions;

export default userSlice.reducer;
