import { Navigate, Outlet } from 'react-router-dom';

export const EditorRoute = () => {
  const role = localStorage.getItem('role');

  return (
    <>
      {!(role === 'admin' || role === 'editor') && <Navigate to='/' />}
      <Outlet />
    </>
  );
};
