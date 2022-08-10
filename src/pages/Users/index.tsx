import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import { hooks } from '../../state';
import { userOperations } from '../../state/ducks/users';
import usersActions from '../../state/ducks/users/actions';
import usersSelectors from '../../state/ducks/users/selectors';
import { AlertDialog } from '../../components';
import { UserType } from '../../constants/genericTypes';

import * as S from './styles';

export const Users = () => {
  const token = localStorage.getItem('token');
  const { getUsers } = usersActions;
  const { useAppSelector, useAppDispatch } = hooks;
  const { selectUsers } = usersSelectors;
  const { users } = useAppSelector(selectUsers);
  const { deleteUser } = userOperations;

  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number>();

  useEffect(() => {
    if (token && !users.length) {
      dispatch(getUsers(token));
    }
  }, [token, users, dispatch, getUsers]);

  const handleClickOpen = (userId: number) => {
    setSelectedUserId(userId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AlertDialogText = {
    title: 'Are you sure you want to delete this user?',
    body: `This action can't be undone`,
  };

  const handleConfirm = () => {
    if (selectedUserId) {
      dispatch(deleteUser(selectedUserId));
    }
    handleClose();
  };

  return (
    <S.UsersSection>
      <S.StyledLink to='/users/create'>Add User</S.StyledLink>
      <>
        <S.UsersHeader>
          <p>Name</p>
          <p>E-mail</p>
          <p>Role</p>
          <p>Actions</p>
        </S.UsersHeader>

        {users.map((user: UserType) => (
          <S.UserCard key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.role}</p>
            <button onClick={() => handleClickOpen(user.id)}>
              <DeleteIcon />
            </button>
          </S.UserCard>
        ))}
        <AlertDialog
          open={open}
          handleClose={handleClose}
          alertDialogText={AlertDialogText}
          handleConfirm={() => handleConfirm()}
        />
      </>
    </S.UsersSection>
  );
};

export default Users;
