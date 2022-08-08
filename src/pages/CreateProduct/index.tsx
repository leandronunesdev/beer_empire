import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { hooks } from '../../state';
import { beerOperations, beerSelectors } from '../../state/ducks/beers';
import * as S from './styles';

export const CreateProduct = () => {
  const { createBeer, updateBeer } = beerOperations;
  const { useAppDispatch, useAppSelector } = hooks;
  const { selectBeers } = beerSelectors;
  const { error } = useAppSelector(selectBeers);

  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [id, setId] = useState(0);
  const [addedBeer, setAddedBeer] = useState(false);

  const onTitleChanged = (e: any) => setTitle(e.target.value);
  const onPriceChanged = (e: any) => setPrice(e.target.value);
  const onDescriptionChanged = (e: any) => setDescription(e.target.value);
  const onImageChanged = (e: any) => setImage(e.target.value);

  const canSave = [title, price, description, image].every(Boolean);

  interface CustomizedState {
    beer: {
      description: string;
      id: number;
      image: string;
      price: string;
      title: string;
    };
  }

  const location = useLocation();

  const state = location.state as CustomizedState;

  useEffect(() => {
    if (state) {
      setDescription(state.beer.description);
      setId(state.beer.id);
      setImage(state.beer.image);
      setPrice(state.beer.price);
      setTitle(state.beer.title);
    }
  }, [state]);

  const handleBeerCreation = (e: any) => {
    e.preventDefault();

    const params = {
      title: title,
      price: price,
      description: description,
      image: image,
    };

    const idString = id.toString();

    if (state) {
      dispatch(updateBeer({ ...params, idString })).then(() =>
        setAddedBeer(true)
      );
      return;
    } else {
      dispatch(createBeer(params)).then(() => setAddedBeer(true));
      return;
    }
  };

  return (
    <S.BeersSection>
      <S.StyledForm onSubmit={handleBeerCreation}>
        <S.StyledInput
          type='text'
          name='beerTitle'
          id='beerTitle'
          value={title}
          onChange={onTitleChanged}
          placeholder='Beer title'
          required
        />
        <S.StyledInput
          type='number'
          name='beerPrice'
          id='beerPrice'
          value={price}
          onChange={onPriceChanged}
          placeholder='$'
          required
        />
        <S.StyledInput
          type='text'
          name='beerDescription'
          id='beerDescription'
          value={description}
          onChange={onDescriptionChanged}
          placeholder='Description'
          required
        />
        <S.StyledInput
          type='url'
          name='imageUrl'
          id='imageUrl'
          value={image}
          onChange={onImageChanged}
          placeholder='Image URL'
          required
        />
        {error && <S.StyledError>{error.message}</S.StyledError>}
        <S.StyledButton disabled={!canSave}>Save product</S.StyledButton>
      </S.StyledForm>
      {addedBeer && !error && <Navigate to='/products/list' />}
    </S.BeersSection>
  );
};

export default CreateProduct;
