import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import { hooks } from '../../state';
import { authSelectors } from '../../state/ducks/auth';
import * as S from './styles';

export const Login = () => {
  const { useAppSelector } = hooks;
  const { selectAuth } = authSelectors;
  const { token } = useAppSelector(selectAuth);
  const [createAccount, setCreateAccount] = useState(false);

  return (
    <>
      {token && <Navigate to='/' />}
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
