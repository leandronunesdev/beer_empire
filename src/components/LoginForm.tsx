import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { hooks } from '../state';
import { authOperations, authSelectors } from '../state/ducks/auth';

const LoginForm = () => {
  const { logIn } = authOperations;
  const { useAppDispatch, useAppSelector } = hooks;
  const { selectAuth } = authSelectors;
  const { error } = useAppSelector(selectAuth);

  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLogged, setIsLogged] = useState(false);

  const onEmailChanged = (e: any) => setEmail(e.target.value);
  const onPasswordChanged = (e: any) => setPassword(e.target.value);

  const canLogin = [email, password].every(Boolean);

  const token = localStorage.getItem('token');

  const loginUser = (e: any) => {
    e.preventDefault();

    const params = {
      email: email,
      password: password,
    };

    dispatch(logIn(params));
  };

  return (
    <>
      {token && <Navigate to='/' />}
      {isLogged && <Navigate to='/' />}

      <form onSubmit={loginUser}>
        <label htmlFor='userEmail'>Email</label>
        <input
          type='email'
          name='userEmail'
          id='userEmail'
          value={email}
          onChange={onEmailChanged}
          required
        />
        <label htmlFor='userPassword'>Password</label>
        <input
          type='password'
          name='userPassword'
          id='userPassword'
          value={password}
          onChange={onPasswordChanged}
          required
        />
        {error && <p>{error.message}</p>}
        <button disabled={!canLogin}>Login</button>
      </form>
    </>
  );
};

export default LoginForm;
