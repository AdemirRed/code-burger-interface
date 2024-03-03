/* eslint-disable import-helpers/order-imports */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;
  background: #1e1d1d;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: black;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: black;
    color: #9758a6;
  }
  .rec.rec-arrow:disabled {
    border: 2px solid red;
    background-color: #14151a;
    color: red;
  }
`;

export const OffersImg = styled.img``;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
  background-color: #2b2a2a;
  border-radius: 20px;
  p {
    color: white;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    line-height: 120%;
    background-color: #2b2a2a;
  }
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 12px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  background: #9758a6;
  box-shadow:
    0px 1px 10px rgba(151, 88, 166, 0.22),
    0px 1px 40px rgba(151, 88, 166, 0.24);
  border-radius: 8px;

  height: 50px;
  border: none;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  color: white;
  text-align: center;
  padding: px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.5;
  }
`;
