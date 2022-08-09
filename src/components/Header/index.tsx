import React from 'react';
import { useSelector } from 'react-redux';
import { hooks } from '../../state';
import { authOperations } from '../../state/ducks/auth';
import { cartSelectors } from '../../state/ducks/cart';

import * as S from './styles';

const Header = () => {
  const role = localStorage.getItem('role');
  const name = localStorage.getItem('user_name');

  const { logOut } = authOperations;
  const { useAppDispatch, useAppSelector } = hooks;

  const { selectCart } = cartSelectors;
  const { cart } = useAppSelector(selectCart);
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
function useAppSelector(selectCart: (state: any) => any): { cart: any } {
  throw new Error('Function not implemented.');
}
