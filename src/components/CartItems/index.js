/* eslint-disable import-helpers/order-imports */
import React from 'react';

import { useCart } from '../../hooks/CartContext';
import { Container, Header, Body, EmptyCart } from './style';
import formatCurrency from '../../utils/formatCurrency';

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts, deletProducts } = useCart();
  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
        <p>Excluir</p>
      </Header>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
            <button onClick={() => deletProducts(product.id)} className="lixeira">
              🗑️
            </button>
          </Body>
        ))
      ) : (
        <EmptyCart>🛒 Carrinho Vazio! 😢</EmptyCart>
      )}
    </Container>
  );
}
