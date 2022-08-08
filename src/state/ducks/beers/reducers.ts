import { createReducer, SerializedError } from '@reduxjs/toolkit';
import actions from './actions';

export type AuthState = {
  beers: any;
  isFetching: boolean;
  error?: SerializedError;
};

const initialState: AuthState = {
  beers: [],
  isFetching: false,
  error: undefined,
};

const beersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.getBeers.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.getBeers.fulfilled, (state, action: any) => {
      state.isFetching = false;
      state.error = undefined;
      state.beers = action.payload.beers;
    })
    .addCase(actions.getBeers.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.deleteBeer.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.deleteBeer.fulfilled, (state, action: any) => {
      console.log('t', action.payload);
      state.isFetching = false;
      state.error = undefined;
      // state.beers = action.payload.beers;
    })
    .addCase(actions.deleteBeer.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    });
});

export default beersReducer;
