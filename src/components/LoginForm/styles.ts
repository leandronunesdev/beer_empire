import styled, { css } from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
`;

export const StyledInput = styled.input`
  margin: 8px;
  padding: 16px;
  border: grey 0.5px solid;
  border-radius: 4px;
`;

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

export const StyledError = styled.p`
  color: red;
`;
