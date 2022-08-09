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
