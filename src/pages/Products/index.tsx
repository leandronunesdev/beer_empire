import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AlertDialog from '../../components/AlertDialog';

import { hooks } from '../../state';
import { authSelectors } from '../../state/ducks/auth';
import { beerOperations, beerSelectors } from '../../state/ducks/beers';
import { checkout } from '../../state/ducks/cart/reducers';
import * as S from './styles';

export const Edit = () => {
  const { useAppSelector, useAppDispatch } = hooks;
  const { selectBeers } = beerSelectors;
  const { beers } = useAppSelector(selectBeers);
  const { deleteBeer } = beerOperations;
  const { selectAuth } = authSelectors;
  const { userRole } = useAppSelector(selectAuth);

  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState('');
  const [editBeer, setEditBeer] = useState();

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

  const handleEdit = (beer: any) => {
    setEditBeer(beer);
  };

  useEffect(() => {
    dispatch(checkout());
  }, []);

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

          {beers.map((beer: any) => (
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
