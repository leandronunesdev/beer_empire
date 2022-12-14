import { ChangeEvent, FormEvent, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { Button } from '../../components';
import { hooks } from '../../state';
import { userOperations, userSelectors } from '../../state/ducks/users';

import * as S from './styles';

export const CreateUser = () => {
  const { createUser } = userOperations;
  const { useAppDispatch, useAppSelector } = hooks;
  const { selectUsers } = userSelectors;
  const { error } = useAppSelector(selectUsers);

  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [addedUser, setAddedUser] = useState(false);

  const onNameChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onEmailChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onRoleChanged = (e: ChangeEvent<HTMLSelectElement>) =>
    setRole(e.target.value);
  const onPasswordChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const navigate = useNavigate();

  const canSave = [name, email, role, password].every(Boolean);

  const handleUserCreation = (e: FormEvent) => {
    e.preventDefault();

    const params = {
      name: name,
      email: email,
      role: role,
      password: password,
    };

    dispatch(createUser(params)).then(() => setAddedUser(true));
    return;
  };

  return (
    <S.UsersSection>
      <S.StyledForm onSubmit={handleUserCreation}>
        <S.StyledInput
          type='text'
          name='userName'
          id='userName'
          value={name}
          onChange={onNameChanged}
          placeholder='User name'
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
        <S.StyledSelect
          id='role'
          name='role'
          onChange={onRoleChanged}
          defaultValue='placeholder'
        >
          <option value='placeholder' disabled>
            Select user role
          </option>
          <option value='admin'>Administrator</option>
          <option value='editor'>Editor</option>
          <option value='user'>User</option>
        </S.StyledSelect>
        <S.StyledInput
          type='password'
          name='userPassword'
          id='userPassword'
          value={password}
          onChange={onPasswordChanged}
          placeholder='User password'
          required
          autoComplete='off'
        />
        {error && <S.StyledError>{error.message}</S.StyledError>}
        <Button disabled={!canSave} label='Save user' />
        <S.CancelButton onClick={() => navigate(-1)}>Cancel</S.CancelButton>
      </S.StyledForm>
      {addedUser && !error && <Navigate to='/users/list' />}
    </S.UsersSection>
  );
};

export default CreateUser;
