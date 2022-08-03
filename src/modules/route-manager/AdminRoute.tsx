import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  const role: any = localStorage.getItem('role');

  return (
    <>
      {role !== 'admin' && <Navigate to='/' />}
      <Outlet />
    </>
  );
};

export default AdminRoute;
