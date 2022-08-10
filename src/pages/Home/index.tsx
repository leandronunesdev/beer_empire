import { useEffect } from 'react';

import { ProductType } from '../../constants/genericTypes';
import { hooks } from '../../state';
import { beerOperations, beerSelectors } from '../../state/ducks/beers';
import {
  categoriesOperations,
  categoriesSelectors,
} from '../../state/ducks/categories';
import { cartOperations, cartSelectors } from '../../state/ducks/cart';

import * as S from './styles';

export const Home = () => {
  const token = localStorage.getItem('token');
  const { useAppDispatch, useAppSelector } = hooks;
  const dispatch = useAppDispatch();

  const { getBeers } = beerOperations;
  const { selectBeers } = beerSelectors;
  const { beers } = useAppSelector(selectBeers);

  const { getCategories } = categoriesOperations;
  const { selectCategories } = categoriesSelectors;
  const { categories } = useAppSelector(selectCategories);

  const { productAdded, productRemoved } = cartOperations;
  const { selectCart } = cartSelectors;
  const { cart } = useAppSelector(selectCart);

  useEffect(() => {
    if (token && !beers.length) {
      dispatch(getBeers(token));
      dispatch(getCategories(token));
    }
  }, [token, beers, dispatch, getBeers, getCategories]);

  return (
    <>
      <S.CategoriesSection>
        <S.CategoriesList>
          {categories &&
            categories.map((category: string) => (
              <>
                <li key={category}>{category}</li>
                <div>|</div>
              </>
            ))}
        </S.CategoriesList>
      </S.CategoriesSection>
      <S.BeersSection>
        {beers &&
          beers.map((beer: ProductType) => (
            <S.ProductCard key={beer.id}>
              <img src={beer.image} alt={beer.title} />
              <p>{beer.title}</p>
              <p>$ {beer.price}</p>
              {cart.find((cartBeer: ProductType) => cartBeer.id === beer.id) ? (
                <S.SpecialButton>
                  <button onClick={() => dispatch(productRemoved(beer.id))}>
                    -
                  </button>
                  <p>
                    {
                      cart.find(
                        (cartBeer: ProductType) => cartBeer.id === beer.id
                      )?.quantity
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
