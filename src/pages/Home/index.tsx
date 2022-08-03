import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  currentCart,
  productAdded,
  productRemoved,
} from '../../state/ducks/cart/reducers';
import { hooks } from '../../state';
import { beerOperations, beerSelectors } from '../../state/ducks/beers';
import {
  categoriesOperations,
  categoriesSelectors,
} from '../../state/ducks/categories';
import * as S from './styles';

const Home = () => {
  const token = localStorage.getItem('token');
  const { useAppDispatch, useAppSelector } = hooks;
  const dispatch = useAppDispatch();

  const { getBeers } = beerOperations;
  const { selectBeers } = beerSelectors;
  const { beers } = useAppSelector(selectBeers);

  const { getCategories } = categoriesOperations;
  const { selectCategories } = categoriesSelectors;
  const { categories } = useAppSelector(selectCategories);

  const cart = useSelector(currentCart);

  useEffect(() => {
    if (token) {
      dispatch(getBeers(token));
      dispatch(getCategories(token));
    }
  }, [dispatch]);

  return (
    <>
      <S.CategoriesSection>
        <S.CategoriesList>
          {categories &&
            categories.map((category: any) => (
              <>
                <li key={category}>{category}</li>
                <li>|</li>
              </>
            ))}
        </S.CategoriesList>
      </S.CategoriesSection>
      <section>
        {/* <ul>{beersContent}</ul> */}
        {beers &&
          beers.map((beer: any) => (
            <li key={beer.id}>
              {beer.title}
              <button
                onClick={() => dispatch(productAdded({ ...beer, quantity: 1 }))}
              >
                Add to Cart
              </button>
              {cart.find((cartBeer: any) => cartBeer.id === beer.id) && (
                <button
                  onClick={() => dispatch(productRemoved({ id: beer.id }))}
                >
                  Remove
                </button>
              )}
            </li>
          ))}
      </section>
    </>
  );
};

export default Home;
