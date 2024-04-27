/* eslint-disable import-helpers/order-imports */
import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  background-color: black;
  height: 72px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`;

export const PageLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ContainerText = styled.div``;

export const Line = styled.div`
  height: 40px;
  border-right: 0.8px solid white;
`;
