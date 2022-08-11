import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { hooks } from '../../state';
import { authOperations, authSelectors } from '../../state/ducks/auth';
import { LoginForm, RegisterForm } from '../../components';

import * as S from './styles';

export const Login = () => {
  const token = localStorage.getItem('token');
  const [createAccount, setCreateAccount] = useState(false);

  const { useAppDispatch, useAppSelector } = hooks;
  const { selectAuth } = authSelectors;
  const { isLogged } = useAppSelector(selectAuth);
  const { clearError } = authOperations;

  const dispatch = useAppDispatch();

  const handleAccountSwitch = () => {
    setCreateAccount(!createAccount);
    dispatch(clearError());
  };

  return (
    <>
      {token && isLogged && <Navigate to='/' />}
      <S.Wrapper>
        <S.StyledLogo />
        {createAccount ? (
          <>
            <RegisterForm />
            <S.Button onClick={() => handleAccountSwitch()}>
              Already have an account? Login!
            </S.Button>
          </>
        ) : (
          <>
            <LoginForm />
            <S.Button onClick={() => handleAccountSwitch()}>
              Create account
            </S.Button>
          </>
        )}
      </S.Wrapper>
    </>
  );
};

export default Login;
