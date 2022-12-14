import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { ProductType } from '../../constants/genericTypes';
import { AlertDialog } from '../../components';
import { hooks } from '../../state';
import { authSelectors } from '../../state/ducks/auth';
import { beerOperations, beerSelectors } from '../../state/ducks/beers';
import { cartOperations } from '../../state/ducks/cart';

import * as S from './styles';

export const Edit = () => {
  const { useAppSelector, useAppDispatch } = hooks;
  const { selectBeers } = beerSelectors;
  const { beers } = useAppSelector(selectBeers);
  const { deleteBeer } = beerOperations;
  const { selectAuth } = authSelectors;
  const { userRole } = useAppSelector(selectAuth);
  const { checkout } = cartOperations;

  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [selectedBeerId, setSelectedBeerId] = useState<number>();
  const [editBeer, setEditBeer] = useState<ProductType>();

  const handleClickOpen = (beerId: number) => {
    setSelectedBeerId(beerId);
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
    if (selectedBeerId) {
      dispatch(deleteBeer(selectedBeerId));
    }
    handleClose();
  };

  const handleEdit = (beer: ProductType) => {
    setEditBeer(beer);
  };

  useEffect(() => {
    dispatch(checkout());
  }, [dispatch, checkout]);

  return (
    <S.BeersSection>
      {editBeer && <Navigate to='/products/edit' state={{ beer: editBeer }} />}
      <S.StyledLink to='/products/create'>Add Product</S.StyledLink>
      {beers.length ? (
        <>
          <S.CartHeader>
            <p>Product</p>
            <p>Description</p>
            <p>Price</p>
            <p>Actions</p>
          </S.CartHeader>

          {beers.map((beer: ProductType) => (
            <S.ProductCard key={beer.id}>
              <img src={beer.image} alt={beer.title} />
              <p>{beer.title}</p>
              <p>{beer.description}</p>
              <p>$ {beer.price}</p>
              <button onClick={() => handleEdit(beer)}>
                <EditIcon />
              </button>
              {userRole === 'admin' && (
                <button onClick={() => handleClickOpen(beer.id)}>
                  <DeleteIcon />
                </button>
              )}
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
