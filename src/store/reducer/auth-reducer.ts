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
  userInfo: {} as any,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    changeUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    changeUserInfo(state, action: PayloadAction<any>) {
      state.userInfo = action.payload;
    },
  },
});

export const {changeAccessToken, changeUser, changeUserInfo} =
  authSlice.actions;
export default authSlice.reducer;
