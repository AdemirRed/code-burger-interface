/* eslint-disable import-helpers/order-imports */
import React from 'react';

import Cart from '../../assets/img/Cart.svg';
import Person from '../../assets/img/person.svg';
import { Container, Line, ContainerRight, ContainerLeft, PageLink, ContainerText } from './style';

export function Header() {
  return (
    <Container>
      <ContainerLeft>
        <PageLink>Home</PageLink>
        <PageLink>Ver Produtos</PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink>
          <img src={Cart} alt="Carrinho"></img>
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="Perfil"></img>
        </PageLink>
        <ContainerText>
          <p>Olá Ademir ADM</p>
          <PageLink>Sair</PageLink>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}
