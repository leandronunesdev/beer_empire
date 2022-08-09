import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UsersSection = styled.section`
  background: #f0f0f0;
  border-top: 8px solid #ffa935;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:last-child {
    padding-bottom: 32px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background: #fc591f;
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
    background: #f46e42;
  }
`;

export const UsersHeader = styled.div`
  width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
`;

export const UserCard = styled.div`
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
    background: #fc591f;
    border: none;
    color: white;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin: auto;

    &:hover {
      background: #f46e42;
    }
  }
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
    background: #35c85c;
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
      background: #3cd863;
    }
  }
`;

export const DisclaimerText = styled.p`
  align-self: center;
  margin-top: 64px;
  font-weight: bold;
  font-size: 24px;
`;
