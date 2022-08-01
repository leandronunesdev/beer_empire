import React from 'react';
import { useSelector } from 'react-redux';
import { currentCart } from '../features/cart/cartSlice';

const Header = () => {
  const cart = useSelector(currentCart);
  return <div>Carrinho: {cart.length}</div>;
};

export default Header;
