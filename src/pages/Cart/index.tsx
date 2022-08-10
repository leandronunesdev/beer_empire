import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { ProductCartType } from '../../constants/genericTypes';
import { hooks } from '../../state';
import { cartOperations, cartSelectors } from '../../state/ducks/cart';

import * as S from './styles';

export const Cart = () => {
  const { useAppDispatch, useAppSelector } = hooks;

  const dispatch = useAppDispatch();

  const { productAdded, productRemoved, checkout } = cartOperations;
  const { selectCart } = cartSelectors;
  const { cart } = useAppSelector(selectCart);

  const [didCheckout, setDidCheckout] = useState(false);

  const cartTotal: number[] = [];

  const calcProductTotal = (price: string, quantity: number) => {
    const total = parseInt(price, 10) * quantity;
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

          {cart.map((cartItem: ProductCartType) => (
            <S.ProductCart key={cartItem.id}>
              <img src={cartItem.image} alt={cartItem.title} />
              <p>{cartItem.title}</p>
              <p>$ {cartItem.price}</p>
              <S.SpecialButton>
                <button onClick={() => dispatch(productRemoved(cartItem.id))}>
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
