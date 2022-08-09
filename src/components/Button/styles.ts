import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  ${({ theme }) => css`
    margin: 8px;
    padding: 16px;
    color: white;
    border: none;
    background: ${theme.colors.lightBlue};
    border-radius: 4px;

    &:enabled {
      background: ${theme.colors.blue};
      cursor: pointer;
    }
    &:enabled:hover {
      background: ${theme.colors.darkBlue};
    }
  `}
`;
