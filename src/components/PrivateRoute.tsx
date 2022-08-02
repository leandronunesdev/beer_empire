import { Navigate, Outlet } from 'react-router-dom';
import Header from './Header';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');

  return (
    <>
      {!token && <Navigate to='/login' />}
      <Header />
      <Outlet />
    </>
  );
};

export default PrivateRoute;
