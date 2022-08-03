import styled from 'styled-components';

export const CategoriesSection = styled.section`
  border-bottom: 8px solid #ffa935;
  background: white;
`;

export const CategoriesList = styled.ul`
  list-style-type: none;
  display: flex;
  width: 80%;
  justify-content: space-between;
  padding: 16px;
  margin: auto;
`;

export const BeersSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  background: #f0f0f0;
`;

export const ProductCard = styled.div`
  width: 200px;
  height: 400px;
  border-radius: 8px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: white;
  justify-content: space-between;

  img {
    max-width: 80%;
    max-height: 176px;
    margin-top: 16px;
  }

  button {
    background: #fc591f;
    border: none;
    padding: 16px;
    color: white;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 16px;

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
