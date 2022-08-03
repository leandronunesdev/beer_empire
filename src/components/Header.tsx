import React from 'react';
import { useSelector } from 'react-redux';
import { currentCart } from '../state/ducks/cart/reducers';
import { hooks } from '../state';
import { authOperations, authSelectors } from '../state/ducks/auth';
import { Link } from 'react-router-dom';

const { logOut } = authOperations;
const { useAppDispatch } = hooks;

const Header = () => {
  const { useAppSelector } = hooks;
  const { selectAuth } = authSelectors;
  const { userName, userRole } = useAppSelector(selectAuth);

  const cart = useSelector(currentCart);
  const dispatch = useAppDispatch();

  return (
    <>
      <p>Bem vindo {userName}</p>
      <p>O seu nível de acesso é: {userRole}</p>
      <div>Carrinho: {cart.length}</div>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      <Link to='/'>Home</Link>
      {(userRole === 'editor' || userRole === 'admin') && (
        <Link to='/edit/product'>Edit Products</Link>
      )}
      {userRole === 'admin' && <Link to='/admin/users'>Edit Users</Link>}
    </>
  );
};

export default Header;
