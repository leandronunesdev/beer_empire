import React, { useEffect } from 'react';
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

  const cart = useAppSelector(currentCart);

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
      <S.BeersSection>
        {beers &&
          beers.map((beer: any) => (
            <S.ProductCard key={beer.id}>
              <img src={beer.image} alt={beer.title} />
              <p>{beer.title}</p>
              <p>$ {beer.price}</p>
              {cart.find((cartBeer: any) => cartBeer.id === beer.id) ? (
                <S.SpecialButton key={beer.id}>
                  <button
                    onClick={() => dispatch(productRemoved({ id: beer.id }))}
                  >
                    -
                  </button>
                  <p>
                    {
                      cart.find((cartBeer: any) => cartBeer.id === beer.id)
                        .quantity
                    }
                  </p>
                  <button
                    onClick={() =>
                      dispatch(productAdded({ ...beer, quantity: 1 }))
                    }
                  >
                    +
                  </button>
                </S.SpecialButton>
              ) : (
                <button
                  onClick={() =>
                    dispatch(productAdded({ ...beer, quantity: 1 }))
                  }
                >
                  Add to Cart
                </button>
              )}
            </S.ProductCard>
          ))}
      </S.BeersSection>
    </>
  );
};

export default Home;
