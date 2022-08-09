import { configureStore } from '@reduxjs/toolkit';
import authReducer from './ducks/auth/reducers';
import beersReducer from './ducks/beers/reducers';
import cartReducer from './ducks/cart/reducers';
import categoriesReducer from './ducks/categories/reducers';
import usersReducer from './ducks/users/reducers';

const reducer = {
  cart: cartReducer,
  beers: beersReducer,
  categories: categoriesReducer,
  auth: authReducer,
  users: usersReducer,
};

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
