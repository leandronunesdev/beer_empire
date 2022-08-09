import { Navigate, Outlet } from 'react-router-dom';

const EditorRoute = () => {
  const role = localStorage.getItem('role');

  return (
    <>
      {!(role === 'admin' || role === 'editor') && <Navigate to='/' />}
      <Outlet />
    </>
  );
};

export default EditorRoute;
