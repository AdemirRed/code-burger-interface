/* eslint-disable import-helpers/order-imports */
import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  min-height: calc(100vh- 72px);
`;

export const CartImg = styled.img`
  width: 100%;
  @media (max-width: 1081px) {
    width: 100vw;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  padding-bottom: 20px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    max-width: max-content;
  }
`;
