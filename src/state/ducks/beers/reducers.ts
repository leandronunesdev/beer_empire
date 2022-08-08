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
      const beers = state.beers.filter(
        (beer: any) => beer.id !== action.payload
      );
      state.beers = beers;
      state.isFetching = false;
      state.error = undefined;
    })
    .addCase(actions.deleteBeer.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.createBeer.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.createBeer.fulfilled, (state, action: any) => {
      state.isFetching = false;
      state.error = undefined;
      state.beers.push(action.payload.data);
    })
    .addCase(actions.createBeer.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.updateBeer.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.updateBeer.fulfilled, (state, action: any) => {
      const updatedBeerIndex = state.beers.findIndex(
        (beer: any) => beer.id === action.payload.data.id
      );
      state.isFetching = false;
      state.error = undefined;
      state.beers[updatedBeerIndex] = action.payload.data;
    })
    .addCase(actions.updateBeer.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    });
});

export default beersReducer;
