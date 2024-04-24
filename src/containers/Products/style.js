/* eslint-disable import-helpers/order-imports */
import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  min-height: 100vh;
`;

export const ProductsImg = styled.img`
  width: 100%;
  height: 500px;
  background: gray;
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: -5px;
  background-color: #2b2a2a;
  height: 50px;
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

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 40px;
  justify-items: center;
`;
