import React from 'react';
import { useSelector } from 'react-redux';
import { currentCart } from '../../state/ducks/cart/reducers';
import { hooks } from '../../state';
import { authOperations, authSelectors } from '../../state/ducks/auth';
import { Link } from 'react-router-dom';

import * as S from './styles';

const Header = () => {
  const { logOut } = authOperations;
  const { useAppDispatch } = hooks;
  const { useAppSelector } = hooks;
  const { selectAuth } = authSelectors;
  const { userName, userRole } = useAppSelector(selectAuth);

  const cart = useSelector(currentCart);
  const dispatch = useAppDispatch();

  return (
    <S.Wrapper>
      <S.StyledLogo />
      <p>Welcome {userName}!</p>
      <p>Your access level is: {userRole}</p>
      <div>Cart: {cart.length}</div>
      <S.SyledLink to='/'>Home</S.SyledLink>
      {(userRole === 'editor' || userRole === 'admin') && (
        <S.SyledLink to='/edit/product'>Edit Products</S.SyledLink>
      )}
      {userRole === 'admin' && (
        <S.SyledLink to='/admin/users'>Edit Users</S.SyledLink>
      )}
      <S.StyledButton onClick={() => dispatch(logOut())}>Logout</S.StyledButton>
    </S.Wrapper>
  );
};

export default Header;