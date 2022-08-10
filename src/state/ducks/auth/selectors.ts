import { RootState } from '../../store';

const selectAuth = (state: RootState) => state.auth;

const authSelectors = {
  selectAuth,
};

export default authSelectors;
