/* eslint-disable import-helpers/order-imports */
import React from 'react';

import CartLogo from '../../assets/img/CartImg.svg';
import { Container, CartImg } from './style';
import { CartItems } from '../../components';

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo da Carinho" />
      <CartItems />
    </Container>
  );
}
