import styled, { css } from 'styled-components';
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
  ${({ theme }) => css`
    background-color: white;
    color: ${theme.colors.blue};
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      color: ${theme.colors.darkBlue};
    }
  `}
`;

export const StyledLogo = styled(BeerEmpireLogo)`
  max-width: 200px;
`;
