import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { hooks } from '../../state';
import { authOperations } from '../../state/ducks/auth';
import { cartOperations, cartSelectors } from '../../state/ducks/cart';

import * as S from './styles';

const Header = () => {
  const role = localStorage.getItem('role');
  const name = localStorage.getItem('user_name');

  const { useAppDispatch, useAppSelector } = hooks;
  const dispatch = useAppDispatch();

  const { logOut } = authOperations;
  const { checkout } = cartOperations;
  const { selectCart } = cartSelectors;
  const { cartQuantity } = useAppSelector(selectCart);

  const handleLogout = () => {
    dispatch(logOut());
    dispatch(checkout());
  };

  return (
    <S.Wrapper>
      <S.StyledLogo />
      <p>Welcome {name}!</p>
      <p>Your access level is: {role}</p>
      <S.SyledLink to='/'>Home</S.SyledLink>
      {(role === 'editor' || role === 'admin') && (
        <S.SyledLink to='/products/list'>Edit Products</S.SyledLink>
      )}
      {role === 'admin' && (
        <S.SyledLink to='/users/list'>Edit Users</S.SyledLink>
      )}
      <S.SyledLink to='/cart'>
        <ShoppingCartOutlinedIcon fontSize='large' />
        <div>
          <p>{cartQuantity}</p>
        </div>
      </S.SyledLink>
      <S.StyledButton onClick={() => handleLogout()}>Logout</S.StyledButton>
    </S.Wrapper>
  );
};

export default Header;
