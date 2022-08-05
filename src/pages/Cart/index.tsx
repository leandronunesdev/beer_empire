import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { hooks } from '../../state';
import {
  checkout,
  currentCart,
  productAdded,
  productRemoved,
} from '../../state/ducks/cart/reducers';
import * as S from './styles';

const Cart = () => {
  const { useAppDispatch, useAppSelector } = hooks;
  const dispatch = useAppDispatch();

  const cart = useAppSelector(currentCart);

  const [didCheckout, setDidCheckout] = useState(false);

  const cartTotal: any = [];

  const calcProductTotal = (price: any, quantity: any) => {
    const total = price * quantity;
    cartTotal.push(total);

    return total.toFixed(2);
  };

  const handleCheckout = () => {
    dispatch(checkout());
    setDidCheckout(true);
  };

  return (
    <S.BeersSection>
      {cart.length ? (
        <>
          <S.CartHeader>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </S.CartHeader>

          {cart.map((cartItem: any) => (
            <S.ProductCart key={cartItem.id}>
              <img src={cartItem.image} alt={cartItem.title} />
              <p>{cartItem.title}</p>
              <p>$ {cartItem.price}</p>
              <S.SpecialButton>
                <button
                  onClick={() => dispatch(productRemoved({ id: cartItem.id }))}
                >
                  -
                </button>
                <p>{cartItem.quantity}</p>
                <button
                  onClick={() =>
                    dispatch(productAdded({ ...cartItem, quantity: 1 }))
                  }
                >
                  +
                </button>
              </S.SpecialButton>
              <p>$ {calcProductTotal(cartItem.price, cartItem.quantity)}</p>
            </S.ProductCart>
          ))}
          <S.CartFooter>
            <p>
              Total: ${' '}
              {cartTotal.reduce((a: number, b: number) => a + b, 0).toFixed(2)}
            </p>
            <button onClick={() => handleCheckout()}>Checkout</button>
          </S.CartFooter>
        </>
      ) : (
        <S.DisclaimerText>Your cart is empty!</S.DisclaimerText>
      )}
      {didCheckout && <Navigate to='/checkout' />}
    </S.BeersSection>
  );
};

export default Cart;
