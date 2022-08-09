import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  AdminRoute,
  EditorRoute,
  PrivateRoute,
} from './components/modules/route-manager';
import {
  Cart,
  Checkout,
  CreateProduct,
  CreateUser,
  Edit,
  Home,
  Login,
  NotFound,
  Users,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<PrivateRoute />}>
        <Route index element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/products' element={<EditorRoute />}>
          <Route path='/products/list' element={<Edit />} />
          <Route path='/products/create' element={<CreateProduct />} />
          <Route path='/products/edit' element={<CreateProduct />} />
        </Route>
        <Route path='/users' element={<AdminRoute />}>
          <Route path='/users/list' element={<Users />} />
          <Route path='/users/create' element={<CreateUser />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
