/* eslint-disable import-helpers/order-imports */
import React, { useEffect, useState } from 'react';

import Offers from '../../assets/img/OFERTAS.png';
import { Container, OffersImg, ContainerItems, Image, Button } from './style';
import api from '../../services/api';
import Carousel from 'react-elastic-carousel';
import formatCurrency from '../../utils/formatCurrency';
function OffersCarousel() {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products');

      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) };
        });

      setOffers(onlyOffers);
    }

    loadOffers();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];
  return (
    <Container>
      <OffersImg src={Offers} alt="logo da Oferta" />

      <Carousel itemsToShow={5} style={{ width: '90%' }} breakPoints={breakPoints}>
        {offers &&
          offers.map((product) => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="foto da produto" />
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>
              <Button>Peça agora</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  );
}

export default OffersCarousel;
