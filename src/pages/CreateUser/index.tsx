import { useState } from 'react';
import { Navigate } from 'react-router-dom';
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

  const onNameChanged = (e: any) => setName(e.target.value);
  const onEmailChanged = (e: any) => setEmail(e.target.value);
  const onRoleChanged = (e: any) => setRole(e.target.value);
  const onPasswordChanged = (e: any) => setPassword(e.target.value);

  const canSave = [name, email, role, password].every(Boolean);

  const handleUserCreation = (e: any) => {
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
          value={role}
        >
          <option value='' disabled selected>
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
        />
        {error && <S.StyledError>{error.message}</S.StyledError>}
        <Button disabled={!canSave} label='Save user' />
      </S.StyledForm>
      {addedUser && !error && <Navigate to='/users/list' />}
    </S.UsersSection>
  );
};

export default CreateUser;
