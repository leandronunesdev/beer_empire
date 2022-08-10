import { RootState } from '../../store';

const selectCart = (state: RootState) => state.cart;

const cartSelectors = {
  selectCart,
};

export default cartSelectors;
