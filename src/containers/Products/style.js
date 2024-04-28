/* eslint-disable import-helpers/order-imports */
import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  min-height: calc(100vh- 72px);
`;

export const ProductsImg = styled.img`
  width: 100%;
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: -5px;
  background-color: #2b2a2a;
  height: 50px;
  overflow-x: auto; /* Adicionada uma barra de rolagem horizontal */
`;

export const CategoryButton = styled.button.attrs((props) => ({
  'data-active': props['data-active'],
}))`
  cursor: pointer;
  background: none;
  border: none;
  color: ${(props) => (props['data-active'] ? '#B5011E' : 'white')};
  font-size: 18px;
  line-height: 20px;
`;
// Exibição dos produtos
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 10px;
  padding: 5vw;
  justify-items: center;
`;
