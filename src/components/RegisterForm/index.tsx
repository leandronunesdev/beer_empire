import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Button } from '..';
import { hooks } from '../../state';
import { authOperations, authSelectors } from '../../state/ducks/auth';
import * as S from './styles';

export const RegisterForm = () => {
  const { userRegister } = authOperations;
  const { useAppDispatch, useAppSelector } = hooks;
  const { selectAuth } = authSelectors;
  const { error } = useAppSelector(selectAuth);

  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [ageError, setAgeError] = useState('');
  const [passwordTip, setPasswordTip] = useState(false);

  const onNameChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onEmailChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setAge(e.target.value);
  const onPasswordChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  useEffect(() => {
    if (password.length < 6 && password.length > 0) {
      setPasswordTip(true);
    } else {
      setPasswordTip(false);
    }
  }, [password]);

  const canSave = [
    name,
    email,
    parseInt(age) >= 18,
    password.length >= 6,
  ].every(Boolean);

  const registerUser = (e: FormEvent) => {
    e.preventDefault();
    if (parseInt(age) >= 18) {
      const params = {
        name: name,
        email: email,
        age: age,
        password: password,
      };
      dispatch(userRegister(params));
      return;
    }
    setAgeError('You are to young to use this website, sorry');
  };

  return (
    <>
      <S.StyledForm onSubmit={registerUser}>
        <S.StyledInput
          type='text'
          name='userName'
          id='userName'
          value={name}
          onChange={onNameChanged}
          placeholder='Your name'
          required
        />
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
          type='number'
          name='userAge'
          id='userAge'
          value={age}
          onChange={onAgeChanged}
          placeholder='Your age'
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
          autoComplete='on'
        />
        {passwordTip && (
          <S.StyledError>Password must be at least 6 characters </S.StyledError>
        )}
        <p>You must be 18 or older to use this website</p>
        {error && <S.StyledError>E-mail already registered!</S.StyledError>}
        {ageError && <S.StyledError>{ageError}</S.StyledError>}
        <Button disabled={!canSave} label='Register' />
      </S.StyledForm>
    </>
  );
};

export default RegisterForm;
