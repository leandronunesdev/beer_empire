import styled, { css } from 'styled-components';

export const BeersSection = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.grey};
    border-top: 8px solid ${theme.colors.orange};
    height: 100vh;
    display: flex;
    flex-direction: column;

    p {
      align-self: center;
      margin-top: 64px;
      font-weight: bold;
      font-size: 24px;
    }
  `}
`;
