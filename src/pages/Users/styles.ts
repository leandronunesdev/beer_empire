import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const UsersSection = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.grey};
    border-top: 8px solid ${theme.colors.orange};
    height: 100vh;
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

export const UsersHeader = styled.div`
  width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
`;

export const UserCard = styled.div`
  ${({ theme }) => css`
    width: 700px;
    height: 135px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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

export const DisclaimerText = styled.p`
  align-self: center;
  margin-top: 64px;
  font-weight: bold;
  font-size: 24px;
`;
