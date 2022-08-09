import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { hooks } from '../../state';
import { authSelectors } from '../../state/ducks/auth';
import { LoginForm, RegisterForm } from '../../components';

import * as S from './styles';

export const Login = () => {
  const token = localStorage.getItem('token');
  const [createAccount, setCreateAccount] = useState(false);

  const { useAppSelector } = hooks;
  const { selectAuth } = authSelectors;
  const { isLogged } = useAppSelector(selectAuth);

  return (
    <>
      {token && isLogged && <Navigate to='/' />}
      <S.Wrapper>
        <S.StyledLogo />
        {createAccount ? (
          <>
            <RegisterForm />
            <S.Button onClick={() => setCreateAccount(false)}>
              Already have an account? Login!
            </S.Button>
          </>
        ) : (
          <>
            <LoginForm />
            <S.Button onClick={() => setCreateAccount(true)}>
              Create account
            </S.Button>
          </>
        )}
      </S.Wrapper>
    </>
  );
};

export default Login;
