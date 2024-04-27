/* eslint-disable import-helpers/order-imports */
import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  background-color: #141f1f;
  box-shadow: 0px 10px 40px rgb(137 137 137);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 10px;
  border-bottom: 1px solid white;
  p {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  .lixeira {
    width: 100px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
  }
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 10px;
  width: max-content;
  grid-gap: 10px 15px;
  img {
    border-radius: 10px;
    width: 120px;
  }
  p {
    margin-top: 6px;
    font-size: 16px;
  }
  .quantity-container {
    display: flex;
    gap: 20px;

    button {
      width: 12px;
      height: 30px;
      background: transparent;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: white;
    }
  }
`;

export const EmptyCart = styled.p`
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;
