/* eslint-disable import-helpers/order-imports */
import React from 'react';

import HomeLogo from '../../assets/img/home-logo.svg';
import { Container, HomeImg } from './style';
import { CategoryCarousel, OffersCarousel } from '../../components';

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  );
}
