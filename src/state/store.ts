import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './ducks/cart/reducers';
import authReducer from './ducks/auth/reducers';
import beersReducer from './ducks/beers/reducers';
import categoriesReducer from './ducks/categories/reducers';

const reducer = {
  cart: cartReducer,
  beers: beersReducer,
  categories: categoriesReducer,
  auth: authReducer,
};

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
