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
  justify-content: space-between;
  margin-right: 30px;
  margin-left: 30px;
`;

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`;

export const PageLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.isActive ? '#9758A6' : 'white')};
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Line = styled.div`
  height: 40px;
  border-right: 0.8px solid white;
`;

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;
export const PageLinExit = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;

  cursor: pointer;
  color: #9758a6;
`;
