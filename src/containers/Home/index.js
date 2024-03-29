/* eslint-disable import-helpers/order-imports */
import React from 'react';

import HomeLogo from '../../assets/img/home-logo.svg';
import { Container, HomeImg } from './style';
import CategoryCarousel from '../../components/CategoryCarousel';
import OffersCarousel from '../../components/OffersCarousel';

function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  );
}

export default Home;
