import React from 'react';
import { useSelector } from 'react-redux';
import { currentCart } from '../state/ducks/cart/reducers';
import { hooks } from '../state';
import { authOperations } from '../state/ducks/auth';

const { logOut } = authOperations;
const { useAppDispatch } = hooks;

const Header = () => {
  const userName = localStorage.getItem('user_name');
  const role = localStorage.getItem('role');

  const cart = useSelector(currentCart);
  const dispatch = useAppDispatch();

  return (
    <>
      <p>Bem vindo {userName}</p>
      <p>O seu nível de acesso é: {role}</p>
      <div>Carrinho: {cart.length}</div>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </>
  );
};

export default Header;
