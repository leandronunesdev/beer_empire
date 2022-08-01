import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import beersReducer from '../features/beers/beersSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    beers: beersReducer,
    categories: categoriesReducer,
    user: userReducer,
  },
});

export default store;
