import React from 'react';
import { hooks } from '../../state';
import {
  currentCart,
  productAdded,
  productRemoved,
} from '../../state/ducks/cart/reducers';
import * as S from './styles';

const Cart = () => {
  const { useAppDispatch, useAppSelector } = hooks;
  const dispatch = useAppDispatch();

  const cart = useAppSelector(currentCart);

  const cartTotal: any = [];

  const calcProductTotal = (price: any, quantity: any) => {
    const total = price * quantity;
    cartTotal.push(total);

    return total.toFixed(2);
  };

  return (
    <S.BeersSection>
      <S.CartHeader>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </S.CartHeader>
      {cart &&
        cart.map((cartItem: any) => (
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
        <button>Checkout</button>
      </S.CartFooter>
    </S.BeersSection>
  );
};

export default Cart;
