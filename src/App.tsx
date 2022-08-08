import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Products';
import AdminRoute from './modules/route-manager/AdminRoute';
import Users from './pages/Users/Users';
import Login from './pages/Login';
import PrivateRoute from './modules/route-manager/PrivateRoute';
import EditorRoute from './modules/route-manager/EditorRoute';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<PrivateRoute />}>
        <Route index element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/edit' element={<EditorRoute />}>
          <Route path='/edit/product' element={<Edit />} />
        </Route>
        <Route path='/admin' element={<AdminRoute />}>
          <Route path='/admin/users' element={<Users />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
