import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '..';
import { hooks } from '../../state';
import { authOperations, authSelectors } from '../../state/ducks/auth';
import * as S from './styles';

export const LoginForm = () => {
  const { logIn } = authOperations;
  const { useAppDispatch, useAppSelector } = hooks;
  const { selectAuth } = authSelectors;
  const { error } = useAppSelector(selectAuth);

  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onPasswordChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const canLogin = [email, password].every(Boolean);

  const loginUser = (e: FormEvent) => {
    e.preventDefault();

    const params = {
      email: email,
      password: password,
    };

    dispatch(logIn(params));
  };

  return (
    <>
      <S.StyledForm onSubmit={loginUser}>
        <S.StyledInput
          type='email'
          name='userEmail'
          id='userEmail'
          value={email}
          onChange={onEmailChanged}
          placeholder='E-mail'
          required
        />
        <S.StyledInput
          type='password'
          name='userPassword'
          id='userPassword'
          value={password}
          onChange={onPasswordChanged}
          placeholder='Password'
          required
        />
        {error && (
          <S.StyledError>
            Login failed! Please, check your credentials
          </S.StyledError>
        )}
        <Button disabled={!canLogin} label='Login' />
      </S.StyledForm>
    </>
  );
};

export default LoginForm;
