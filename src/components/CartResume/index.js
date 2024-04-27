/* eslint-disable import-helpers/order-imports */
import React, { useState, useEffect } from 'react';

import { Button } from '../button';
import { Container } from './style';
import formatCurrency from '../../utils/formatCurrency';
import { useCart } from '../../hooks/CartContext';

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(5);

  const { cartProducts } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);
    setFinalPrice(sumAllItems);
  }, [cartProducts, deliveryTax]);

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <h2 className="total">Total </h2>
          <h2 className="valor-total">{formatCurrency(finalPrice + deliveryTax)}</h2>
        </div>
      </Container>
      <Button style={{ width: '100%', margingTop: '15px' }}>Finalizar Pedido</Button>
    </div>
  );
}
