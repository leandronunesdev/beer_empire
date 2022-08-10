import { createReducer, SerializedError } from '@reduxjs/toolkit';
import { ProductType } from '../../../constants/genericTypes';
import actions from './actions';

export type BeersState = {
  beers: ProductType[];
  isFetching: boolean;
  error?: SerializedError;
};

const initialState: BeersState = {
  beers: [],
  isFetching: false,
  error: undefined,
};

const beersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.getBeers.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.getBeers.fulfilled, (state, action) => {
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
    .addCase(actions.deleteBeer.fulfilled, (state, action) => {
      const beers = state.beers.filter(
        (beer: ProductType) => beer.id !== action.payload
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
    .addCase(actions.createBeer.fulfilled, (state, action) => {
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
    .addCase(actions.updateBeer.fulfilled, (state, action) => {
      const updatedBeerIndex = state.beers.findIndex(
        (beer: ProductType) => beer.id === action.payload.data.id
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
