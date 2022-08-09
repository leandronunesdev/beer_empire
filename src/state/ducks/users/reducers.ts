import { createReducer, SerializedError } from '@reduxjs/toolkit';
import actions from './actions';

export type UserState = {
  users: any;
  isFetching: boolean;
  error?: SerializedError;
};

const initialState: UserState = {
  users: [],
  isFetching: false,
  error: undefined,
};

const usersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.getUsers.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.getUsers.fulfilled, (state, action: any) => {
      state.isFetching = false;
      state.error = undefined;
      state.users = action.payload.users;
    })
    .addCase(actions.getUsers.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.deleteUser.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.deleteUser.fulfilled, (state, action: any) => {
      const users = state.users.filter(
        (user: any) => user.id !== action.payload
      );
      state.users = users;
      state.isFetching = false;
      state.error = undefined;
    })
    .addCase(actions.deleteUser.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.createUser.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.createUser.fulfilled, (state, action: any) => {
      state.isFetching = false;
      state.error = undefined;
      state.users.push(action.payload.data.user);
    })
    .addCase(actions.createUser.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.updateUser.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.updateUser.fulfilled, (state, action: any) => {
      const updatedUserIndex = state.users.findIndex(
        (user: any) => user.id === action.payload.data.id
      );
      state.isFetching = false;
      state.error = undefined;
      state.users[updatedUserIndex] = action.payload.data;
    })
    .addCase(actions.updateUser.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    });
});

export default usersReducer;
