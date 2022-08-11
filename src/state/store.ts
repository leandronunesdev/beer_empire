import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import authReducer from './ducks/auth/reducers';
import beersReducer from './ducks/beers/reducers';
import cartReducer from './ducks/cart/reducers';
import categoriesReducer from './ducks/categories/reducers';
import usersReducer from './ducks/users/reducers';

const reducer = combineReducers({
  cart: cartReducer,
  beers: beersReducer,
  categories: categoriesReducer,
  auth: authReducer,
  users: usersReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
