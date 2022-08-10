import { createReducer, SerializedError } from '@reduxjs/toolkit';
import actions from './actions';

export type AuthState = {
  userName?: Record<string, string>;
  userRole: string;
  isFetching: boolean;
  token?: Record<string, string>;
  error?: SerializedError;
  isLogged: boolean;
};

const initialState: AuthState = {
  userName: undefined,
  userRole: '',
  isFetching: false,
  token: undefined,
  error: undefined,
  isLogged: false,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.logIn.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.logIn.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload.data;
      state.isFetching = false;
      state.error = undefined;
      state.userName = user.name;
      state.userRole = user.role;
      state.token = accessToken;
      state.isLogged = true;
    })
    .addCase(actions.logIn.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.logOut.fulfilled, (state, action) => {
      state.isFetching = false;
      state.userName = undefined;
      state.userRole = '';
      state.token = undefined;
      state.isLogged = false;
    })
    .addCase(actions.userRegister.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.userRegister.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload.data;
      state.isFetching = false;
      state.error = undefined;
      state.userName = user.name;
      state.userRole = user.role;
      state.token = accessToken;
      state.isLogged = true;
    })
    .addCase(actions.userRegister.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    });
});

export default authReducer;
