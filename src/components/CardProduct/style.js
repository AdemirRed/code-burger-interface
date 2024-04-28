/* eslint-disable import-helpers/order-imports */
import styled from 'styled-components';

export const Container = styled.div`
  background: #2b2a2a; //mudar para black
  border-radius: 15px;
  display: flex;
  gap: 12px;
  padding: 16px;
  width: auto;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #2b2a2a;
  }
`;

export const Image = styled.img`
  width: 150px;
  border-radius: 10px;
`;
export const ProductName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  background-color: #2b2a2a;

  color: white;
`;
export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  background-color: #2b2a2a;
  color: white;
`;
