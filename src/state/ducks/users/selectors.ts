import { RootState } from '../../store';

const selectUsers = (state: RootState) => state.users;

const usersSelectors = {
  selectUsers,
};

export default usersSelectors;
