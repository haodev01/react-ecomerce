import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type User = {
  id: number;
  email: string;
  role: string;
  verifyStatus: string;
};

const initialState = {
  accessToken: '',
  user: null as User | null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAccessToken(state, action: PayloadAction<string>) {
      console.log({accessToekn: action.payload});
      state.accessToken = action.payload;
    },
    changeUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const {changeAccessToken, changeUser} = authSlice.actions;
export default authSlice.reducer;
