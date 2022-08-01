import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { decodeToken } from 'react-jwt';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  fetchBeers,
  getBeersError,
  getBeersStatus,
  selectAllBeers,
} from '../features/beers/beersSlice';
import {
  currentCart,
  productAdded,
  productRemoved,
} from '../features/cart/cartSlice';
import {
  fetchCategories,
  getCategoriesError,
  getCategoriesStatus,
  selectAllCategories,
} from '../features/categories/categoriesSlice';

const Home = () => {
  const token = localStorage.getItem('token');

  const dispatch = useDispatch();

  const beers = useSelector(selectAllBeers);
  const beersStatus = useSelector(getBeersStatus);
  const beersError = useSelector(getBeersError);

  const categories = useSelector(selectAllCategories);
  const categoriesStatus = useSelector(getCategoriesStatus);
  const categoriesError = useSelector(getCategoriesError);

  const cart = useSelector(currentCart);

  useEffect(() => {
    if (beersStatus === 'idle' && token) {
      dispatch(fetchBeers(token));
    }
  }, [beersStatus, dispatch]);

  useEffect(() => {
    if (categoriesStatus === 'idle' && token) {
      dispatch(fetchCategories(token));
    }
  }, [categoriesStatus, dispatch]);

  let beersContent;
  if (beersStatus === 'loading') {
    beersContent = <p>"Loading..."</p>;
  } else if (beersStatus === 'succeeded') {
    beersContent = beers.map((beer: any) => (
      <li key={beer.id}>
        {beer.title}
        <button
          onClick={() => dispatch(productAdded({ ...beer, quantity: 1 }))}
        >
          Add to Cart
        </button>
        {cart.find((cartBeer: any) => cartBeer.id === beer.id) && (
          <button onClick={() => dispatch(productRemoved({ id: beer.id }))}>
            Remove
          </button>
        )}
      </li>
    ));
  } else if (beersStatus === 'failed') {
    beersContent = <p>{beersError}</p>;
  }

  let categoriesContent;
  if (categoriesStatus === 'loading') {
    categoriesContent = <p>"Loading..."</p>;
  } else if (categoriesStatus === 'succeeded') {
    categoriesContent = categories.map((category: any) => (
      <li key={category}>{category}</li>
    ));
  } else if (categoriesStatus === 'failed') {
    categoriesContent = <p>{categoriesError}</p>;
  }

  useEffect(() => {
    if (token) {
      console.log(decodeToken(token));
    }
  }, [token]);

  return (
    <>
      {!token && <Navigate to='/register' />}
      <section>
        <ul>{categoriesContent}</ul>
      </section>
      <section>
        <ul>{beersContent}</ul>
      </section>
    </>
  );
};

export default Home;
