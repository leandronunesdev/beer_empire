import { Navigate, Outlet } from 'react-router-dom';

export const AdminRoute = () => {
  const role = localStorage.getItem('role');

  return (
    <>
      {role !== 'admin' && <Navigate to='/' />}
      <Outlet />
    </>
  );
};
