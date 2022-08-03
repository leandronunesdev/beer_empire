import styled from 'styled-components';
import { BeerEmpireLogo } from '../../assets/images';

export const Wrapper = styled.div`
  border: 0.5px grey solid;
  width: 50%;
  height: 600px;
  border-radius: 10px;
  display: flex;
  margin: auto;
  margin-top: 10%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
`;

export const Button = styled.button`
  background-color: white;
  color: #3181ea;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: #1b66ca;
  }
`;

export const StyledLogo = styled(BeerEmpireLogo)`
  max-width: 200px;
`;
