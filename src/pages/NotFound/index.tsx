import { Link } from 'react-router-dom';

import * as S from './styles';

export const NotFound = () => {
  return (
    <S.NotFoundSection>
      <img src='https://i.imgflip.com/2k02zl.jpg' alt='Wasted Barney' />
      <h1>Ops!</h1>
      <h2>404 - Page not found</h2>
      <p>
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable
      </p>
      <Link to='/'>Go to Home</Link>
    </S.NotFoundSection>
  );
};
