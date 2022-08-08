import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import AlertDialog from '../../components/AlertDialog';

import { hooks } from '../../state';
import { beerOperations, beerSelectors } from '../../state/ducks/beers';
import * as S from './styles';

const Edit = () => {
  const { useAppSelector, useAppDispatch } = hooks;
  const { selectBeers } = beerSelectors;
  const { beers } = useAppSelector(selectBeers);
  const { deleteBeer } = beerOperations;

  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState('');

  const handleClickOpen = (beerId: any) => {
    setSelectedBeer(beerId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AlertDialogText = {
    title: 'Are you sure you want to delete this product?',
    body: `This action can't be undone`,
  };

  const handleConfirm = () => {
    dispatch(deleteBeer(selectedBeer));
    handleClose();
  };

  return (
    <S.BeersSection>
      {beers.length ? (
        <>
          <S.CartHeader>
            <p>Product</p>
            <p>Description</p>
            <p>Price</p>
            <p>Delete</p>
          </S.CartHeader>

          {beers.map((beer: any) => (
            <S.ProductCard key={beer.id}>
              <img src={beer.image} alt={beer.title} />
              <p>{beer.title}</p>
              <p>{beer.description}</p>
              <p>$ {beer.price}</p>
              <button onClick={() => handleClickOpen(beer.id)}>
                <DeleteIcon />
              </button>
            </S.ProductCard>
          ))}
          <AlertDialog
            open={open}
            handleClose={handleClose}
            alertDialogText={AlertDialogText}
            handleConfirm={() => handleConfirm()}
          />
        </>
      ) : (
        <S.DisclaimerText>You have no registered products!</S.DisclaimerText>
      )}
    </S.BeersSection>
  );
};

export default Edit;
