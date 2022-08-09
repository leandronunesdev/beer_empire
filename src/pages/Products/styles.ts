import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const BeersSection = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.grey};
    border-top: 8px solid ${theme.colors.orange};
    height: 100%;
    display: flex;
    flex-direction: column;

    &:last-child {
      padding-bottom: 32px;
    }
  `}
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    background: ${theme.colors.darkOrange};
    border: none;
    color: white;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 120px;
    height: 40px;
    margin: 32px auto;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${theme.colors.lightOrange};
    }
  `}
`;

export const CartHeader = styled.div`
  width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 0.7fr;
`;

export const ProductCard = styled.div`
  ${({ theme }) => css`
    width: 700px;
    height: 135px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr 1fr 0.5fr 0.5fr;
    align-items: center;
    background: white;

    &:last-child {
      background: red;
    }

    p {
      justify-self: center;
    }

    img {
      max-width: 72px;
      max-height: 72px;
      justify-self: center;
    }

    button {
      background: ${theme.colors.darkOrange};
      border: none;
      color: white;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      width: 40px;
      height: 40px;
      margin: auto;

      &:hover {
        background: ${theme.colors.lightOrange};
      }
    }
  `}
`;

export const DisclaimerText = styled.p`
  align-self: center;
  margin-top: 64px;
  font-weight: bold;
  font-size: 24px;
`;
