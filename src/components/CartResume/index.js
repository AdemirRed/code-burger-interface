/* eslint-disable import-helpers/order-imports */
import React, { useState, useEffect } from 'react';

import { Button } from '../button';
import { Container } from './style';
import formatCurrency from '../../utils/formatCurrency';
import { useCart } from '../../hooks/CartContext';
import api from '../../services/api';
import { toast } from 'react-toastify';

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

  const submitOrder = async () => {
    const order = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity };
    });

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando o seu pedido...',
      success: 'Pedido realizado com sucesso!',
      error: 'Falha ao realizar o seu pedido, Tente Novamente!',
    });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
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
      <Button style={{ width: '90%', marginTop: '15px', height: '50px' }} onClick={submitOrder}>
        Finalizar Pedido
      </Button>
    </div>
  );
}
