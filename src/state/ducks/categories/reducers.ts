import { createReducer, SerializedError } from '@reduxjs/toolkit';
import actions from './actions';

export type CategoriesState = {
  categories: string[];
  isFetching: boolean;
  error?: SerializedError;
};

const initialState: CategoriesState = {
  categories: [],
  isFetching: false,
  error: undefined,
};

const categoriesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.getCategories.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.getCategories.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = undefined;
      state.categories = action.payload.categories;
    })
    .addCase(actions.getCategories.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    });
});

export default categoriesReducer;
