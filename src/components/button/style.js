/* eslint-disable import-helpers/order-imports */
import styled, { css } from 'styled-components';

export const ContainerButton = styled.button`
  box-shadow: 5px 5px 10px #d15bef;
  width: 100px;
  height: 36.13px;
  border-radius: 20px;
  background: #9758a6;
  border: none;
  color: #eeeeee;
  cursor: pointer;
  margin-top: 75px;
  margin-bottom: 25px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }

  /* Estilos responsivos */
  @media (max-width: 768px) {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;
