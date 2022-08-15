import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { BeerEmpireLogo } from '../../assets/images';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  margin: auto;
`;

export const StyledLogo = styled(BeerEmpireLogo)`
  max-width: 100px;
`;

export const SyledLink = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    color: black;
    position: relative;
    &:hover {
      border-bottom: 3px solid ${theme.colors.yellow};
    }

    p {
      background: red;
      color: white;
      padding: 4px 8px;
      border-radius: 50%;
      position: absolute;
      top: -30px;
      right: -10px;
    }
  `}
`;

export const StyledButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.yellow};
    border: none;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: ${theme.colors.darkYellow};
    }
  `}
`;
