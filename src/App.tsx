import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import EditorRoute from './components/EditorRoute';
import Edit from './components/Edit';
import AdminRoute from './components/AdminRoute';
import Users from './components/Users';

function App() {
  return (
    <Routes>
      <Route path='/register' element={<RegisterForm />} />
      <Route path='/login' element={<LoginForm />} />
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
