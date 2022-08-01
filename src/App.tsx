import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <Routes>
      <Route path='/register' element={<RegisterForm />} />
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
