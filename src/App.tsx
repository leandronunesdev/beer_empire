import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRoute from './modules/route-manager/AdminRoute';
import PrivateRoute from './modules/route-manager/PrivateRoute';
import EditorRoute from './modules/route-manager/EditorRoute';
import {
  Cart,
  Checkout,
  CreateProduct,
  CreateUser,
  Edit,
  Home,
  Login,
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
          <Route path='/users/edit' element={<CreateUser />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
