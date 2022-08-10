import styled, { css } from 'styled-components';

export const UsersSection = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.grey};
    border-top: 8px solid ${theme.colors.orange};
    height: 100vh;
    display: flex;
    flex-direction: column;
  `}
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80vh;
  margin: 32px auto;
`;

export const StyledInput = styled.input`
  margin: 8px;
  padding: 16px;
  border: grey 0.5px solid;
  border-radius: 4px;
`;

export const StyledError = styled.p`
  color: red;
  align-self: center;
`;

export const StyledSelect = styled.select`
  margin: 8px;
  padding: 16px;
  border: grey 0.5px solid;
  border-radius: 4px;
`;

export const CancelButton = styled.p`
  ${({ theme }) => css`
    margin: 8px;
    padding: 16px;
    color: white;
    background: ${theme.colors.red};
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    &:hover {
      background: ${theme.colors.lightRed};
    }
  `}
`;
