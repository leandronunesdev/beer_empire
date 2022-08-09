import styled from 'styled-components';

export const UsersSection = styled.section`
  background: #f0f0f0;
  border-top: 8px solid #ffa935;
  height: 100vh;
  display: flex;
  flex-direction: column;
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

export const StyledButton = styled.button`
  margin: 8px;
  padding: 16px;
  color: white;
  border: none;
  background: #96b6e0;
  border-radius: 4px;

  &:enabled {
    background: #1b66ca;
    cursor: pointer;
  }

  &:enabled:hover {
    background: #2579e8;
  }
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
