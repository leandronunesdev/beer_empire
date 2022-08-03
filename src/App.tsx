import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit/Edit';
import AdminRoute from './modules/route-manager/AdminRoute';
import Users from './pages/Users/Users';
import Login from './pages/Login';
import PrivateRoute from './modules/route-manager/PrivateRoute';
import EditorRoute from './modules/route-manager/EditorRoute';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<PrivateRoute />}>
        <Route index element={<Home />} />
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
