import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AlertDialog from '../../components/AlertDialog';

import { hooks } from '../../state';
import { authSelectors } from '../../state/ducks/auth';
import { beerOperations, beerSelectors } from '../../state/ducks/beers';
import { checkout } from '../../state/ducks/cart/reducers';
import { userOperations } from '../../state/ducks/users';
import usersActions from '../../state/ducks/users/actions';
import usersSelectors from '../../state/ducks/users/selectors';
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
  const [selectedUser, setSelectedUser] = useState('');
  const [editUser, setEditUser] = useState();

  useEffect(() => {
    if (token && !users.length) {
      dispatch(getUsers(token));
    }
  }, [dispatch]);

  const handleClickOpen = (userId: any) => {
    setSelectedUser(userId);
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
    dispatch(deleteUser(selectedUser));
    handleClose();
  };

  const handleEdit = (user: any) => {
    setEditUser(user);
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

        {users.map((user: any) => (
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
