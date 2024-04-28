/* eslint-disable import-helpers/order-imports */
import React from 'react';

import CartLogo from '../../assets/img/CartImg.svg';
import { Container, CartImg, Wrapper } from './style';
import { CartItems, CartResume } from '../../components';

export function Cart() {
  return (
    <Container
      style={{ gap: '10px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <CartImg src={CartLogo} alt="logo da Carinho" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  );
}
