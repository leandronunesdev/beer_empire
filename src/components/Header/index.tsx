import React from 'react';
import { useSelector } from 'react-redux';
import { currentCart } from '../../state/ducks/cart/reducers';
import { hooks } from '../../state';
import { authOperations, authSelectors } from '../../state/ducks/auth';
import { Link } from 'react-router-dom';

import * as S from './styles';

const Header = () => {
  const role = localStorage.getItem('role');
  const name = localStorage.getItem('user_name');

  const { logOut } = authOperations;
  const { useAppDispatch } = hooks;

  const cart = useSelector(currentCart);
  const dispatch = useAppDispatch();

  return (
    <S.Wrapper>
      <S.StyledLogo />
      <p>Welcome {name}!</p>
      <p>Your access level is: {role}</p>
      <S.SyledLink to='/cart'>Cart: {cart.length}</S.SyledLink>
      <S.SyledLink to='/'>Home</S.SyledLink>
      {(role === 'editor' || role === 'admin') && (
        <S.SyledLink to='/products/list'>Edit Products</S.SyledLink>
      )}
      {role === 'admin' && (
        <S.SyledLink to='/users/list'>Edit Users</S.SyledLink>
      )}
      <S.StyledButton onClick={() => dispatch(logOut())}>Logout</S.StyledButton>
    </S.Wrapper>
  );
};

export default Header;
