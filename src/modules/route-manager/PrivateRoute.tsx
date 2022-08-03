import { Navigate, Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import { hooks } from '../../state';
import { authSelectors } from '../../state/ducks/auth';

const PrivateRoute = () => {
  const { useAppSelector } = hooks;
  const { selectAuth } = authSelectors;
  const { token } = useAppSelector(selectAuth);

  return (
    <>
      {!token && <Navigate to='/login' />}
      <Header />
      <Outlet />
    </>
  );
};

export default PrivateRoute;
