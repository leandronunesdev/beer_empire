import actions from './actions';

const authOperations = {
  logIn: actions.logIn,
  logOut: actions.logOut,
  userRegister: actions.userRegister,
  clearError: actions.clearError,
};

export default authOperations;
