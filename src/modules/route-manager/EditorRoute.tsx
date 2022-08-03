import { Navigate, Outlet } from 'react-router-dom';
import { hooks } from '../../state';
import { authSelectors } from '../../state/ducks/auth';

const EditorRoute = () => {
  const { useAppSelector } = hooks;
  const { selectAuth } = authSelectors;
  const { userRole } = useAppSelector(selectAuth);

  return (
    <>
      {!(userRole === 'admin' || userRole === 'editor') && <Navigate to='/' />}
      <Outlet />
    </>
  );
};

export default EditorRoute;
