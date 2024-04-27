/* eslint-disable import-helpers/order-imports */
import React from 'react';

import HomeLogo from '../../assets/img/home-logo.svg';
import { Container, HomeImg } from './style';
import { CategoryCarousel, OffersCarousel, Header } from '../../components';

export function Home() {
  return (
    <Container>
      <Header></Header>
      <HomeImg src={HomeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  );
}
