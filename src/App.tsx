import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRoute from './modules/route-manager/AdminRoute';
import Users from './pages/Users/Users';
import PrivateRoute from './modules/route-manager/PrivateRoute';
import EditorRoute from './modules/route-manager/EditorRoute';
import { Cart, Checkout, CreateProduct, Edit, Home, Login } from './pages';

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
        <Route path='/admin' element={<AdminRoute />}>
          <Route path='/admin/users' element={<Users />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
