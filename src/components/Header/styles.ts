import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BeerEmpireLogo } from '../../assets/images';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const StyledLogo = styled(BeerEmpireLogo)`
  max-width: 100px;
`;

export const SyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    border-bottom: 3px solid #ffc147;
  }
`;

export const StyledButton = styled.button`
  background: #ffc147;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #f4ad29;
  }
`;
