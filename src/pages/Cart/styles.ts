import styled, { css } from 'styled-components';

export const BeersSection = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.grey};
    border-top: 8px solid ${theme.colors.orange};
    height: 100vh;
    display: flex;
    flex-direction: column;
  `}
`;

export const CartHeader = styled.div`
  width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3.5fr 1fr 1fr 1fr;
`;

export const ProductCart = styled.div`
  ${({ theme }) => css`
    width: 700px;
    height: 135px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
    align-items: center;
    background: white;

    &:first-child {
      margin-top: 32px;
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

export const CartFooter = styled.div`
  ${({ theme }) => css`
    width: 670px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    background: white;
    margin-bottom: 32px;
    padding-right: 30px;

    p {
      font-weight: bold;
      font-size: 20px;
    }

    button {
      background: ${theme.colors.green};
      border: none;
      padding: 16px 32px;
      color: white;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      margin-bottom: 16px;
      font-weight: bold;
      font-size: 18px;

      &:hover {
        background: ${theme.colors.lightGreen};
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
