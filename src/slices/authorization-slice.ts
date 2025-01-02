import { AuthStatus } from '../constants/constants.ts';
import { User } from '../types/user.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  authorizationStatus: AuthStatus;
  user?: User;
};

const initialState: AuthState = {
  authorizationStatus: AuthStatus.Unknown,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthorizationStatus(state, action: PayloadAction<AuthStatus>) {
      state.authorizationStatus = action.payload;
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { changeAuthorizationStatus, setUser } = authSlice.actions;
export default authSlice.reducer;
