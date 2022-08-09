import { Navigate, Outlet } from 'react-router-dom';
import { hooks } from '../../state';
import { authSelectors } from '../../state/ducks/auth';

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
