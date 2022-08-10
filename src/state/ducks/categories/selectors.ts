import { RootState } from '../../store';

const selectCategories = (state: RootState) => state.categories;

const categoriesSelectors = {
  selectCategories,
};

export default categoriesSelectors;
