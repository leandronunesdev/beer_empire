import { useEffect, useState } from 'react';
import { hooks } from '../../state';
import { authOperations, authSelectors } from '../../state/ducks/auth';
import * as S from './styles';

const RegisterForm = () => {
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

  const onNameChanged = (e: any) => setName(e.target.value);
  const onEmailChanged = (e: any) => setEmail(e.target.value);
  const onAgeChanged = (e: any) => setAge(e.target.value);
  const onPasswordChanged = (e: any) => setPassword(e.target.value);

  const canSave = [name, email, parseInt(age) >= 18, password].every(Boolean);

  const registerUser = (e: any) => {
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

  useEffect(() => {
    console.log(error);
  }, [error]);

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
        />
        <p>You must be 18 or older to use this website</p>
        {error && <S.StyledError>{error.message}</S.StyledError>}
        {ageError && <S.StyledError>{ageError}</S.StyledError>}
        <S.StyledButton disabled={!canSave}>Register</S.StyledButton>
      </S.StyledForm>
    </>
  );
};

export default RegisterForm;
