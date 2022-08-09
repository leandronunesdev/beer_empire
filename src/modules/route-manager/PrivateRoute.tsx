import { Navigate, Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import { hooks } from '../../state';
import { authSelectors } from '../../state/ducks/auth';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');

  const { useAppSelector } = hooks;
  const { selectAuth } = authSelectors;
  const { isLogged } = useAppSelector(selectAuth);

  return (
    <>
      {(!token || !isLogged) && <Navigate to='/login' />}
      <Header />
      <Outlet />
    </>
  );
};

export default PrivateRoute;
