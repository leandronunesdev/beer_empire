import { RootState } from '../../store';

const selectBeers = (state: RootState) => state.beers;

const beersSelectors = {
  selectBeers,
};

export default beersSelectors;
