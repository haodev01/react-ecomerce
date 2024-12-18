import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
  },
});

export const {changeAccessToken} = authSlice.actions;
export default authSlice.reducer;
