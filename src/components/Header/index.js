/* eslint-disable import-helpers/order-imports */
import React from 'react';
import { useHistory } from 'react-router-dom';

import Cart from '../../assets/img/Cart.svg';
import Person from '../../assets/img/person.svg';
import {
  Container,
  PageLinExit,
  Line,
  ContainerRight,
  ContainerLeft,
  PageLink,
  ContainerText,
} from './style';

export function Header() {
  const {
    push,
    location: { pathname },
  } = useHistory();

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('produtos')}>
          Ver Produtos
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink>
          <img src={Cart} alt="Carrinho"></img>
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="logo-pessoa"></img>
        </PageLink>
        <ContainerText>
          <p>Olá, Ademir</p>
          <PageLinExit>Sair</PageLinExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}
