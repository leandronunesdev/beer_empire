import { createReducer, SerializedError } from '@reduxjs/toolkit';
import actions from './actions';

export type AuthState = {
  userName?: Record<string, string>;
  userRole?: Record<string, string>;
  isFetching: boolean;
  token?: Record<string, string>;
  error?: SerializedError;
};

const initialState: AuthState = {
  userName: undefined,
  userRole: undefined,
  isFetching: false,
  token: undefined,
  error: undefined,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.logIn.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.logIn.fulfilled, (state, action: any) => {
      const { accessToken, user } = action.payload.data;
      state.isFetching = false;
      state.error = undefined;
      state.userName = user.name;
      state.userRole = user.role;
      state.token = accessToken;
    })
    .addCase(actions.logIn.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.logOut.fulfilled, (state, action) => {
      state.isFetching = false;
      state.userName = undefined;
      state.userRole = undefined;
      state.token = undefined;
    })
    .addCase(actions.userRegister.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.userRegister.fulfilled, (state, action: any) => {
      const { accessToken, user } = action.payload.data;
      state.isFetching = false;
      state.error = undefined;
      state.userName = user.name;
      state.userRole = user.role;
      state.token = accessToken;
    })
    .addCase(actions.userRegister.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    });
});

export default authReducer;
