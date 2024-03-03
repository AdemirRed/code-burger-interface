/* eslint-disable import-helpers/order-imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, ProductName, ProductPrice } from './style';
import Button from '../button';

function CardProduct({ product }) {
  return (
    <Container>
      <Image src={product.url} alt="Imagem do Produto"></Image>
      <div>
        <ProductName>{product.name}</ProductName>
        <br></br>
        <br></br>
        <ProductPrice>{product.formattedPrice}</ProductPrice>
        <Button style={{ marginTop: 5, marginBottom: -2 }}>Adicionar</Button>
      </div>
    </Container>
  );
}
// margin-top: 75px;
//   margin-bottom: 25px;
export default CardProduct;

CardProduct.propTypes = {
  product: PropTypes.object,
};
