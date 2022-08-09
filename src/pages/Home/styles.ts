import styled, { css } from 'styled-components';

export const CategoriesSection = styled.section`
  ${({ theme }) => css`
    border-bottom: 8px solid ${theme.colors.orange};
    background: white;
  `}
`;

export const CategoriesList = styled.ul`
  list-style-type: none;
  display: flex;
  width: 80%;
  justify-content: space-between;
  padding: 16px;
  margin: auto;
`;

export const BeersSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    background: ${theme.colors.grey};
  `}
`;

export const ProductCard = styled.div`
  ${({ theme }) => css`
    width: 200px;
    height: 400px;
    border-radius: 8px;
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: white;
    justify-content: space-between;

    img {
      max-width: 80%;
      max-height: 176px;
      margin-top: 16px;
    }

    button {
      background: ${theme.colors.darkOrange};
      border: none;
      padding: 16px;
      color: white;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      margin-bottom: 16px;

      &:hover {
        background: ${theme.colors.lightOrange};
      }
    }
  `}
`;

export const SpecialButton = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-bottom: 0;
    border-radius: 8px 0 0 8px;

    &:last-child {
      border-radius: 0 8px 8px 0;
    }
  }

  p {
    border: 0.5px solid black;
    padding: 15px 14px;
  }
`;
