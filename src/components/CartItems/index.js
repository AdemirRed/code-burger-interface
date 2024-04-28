/* eslint-disable import-helpers/order-imports */
import React from 'react';

import { useCart } from '../../hooks/CartContext';
import { Container, Header, Body, EmptyCart, BodyContainer, MobileContainer } from './style';
import formatCurrency from '../../utils/formatCurrency';

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts, deletProducts } = useCart();

  // Função para determinar se a tela é um dispositivo móvel
  const isMobile = () => {
    return window.innerWidth <= 700; // Você pode ajustar este valor conforme necessário
  };

  return (
    <>
      {isMobile() ? (
        // -----------------------------------------------------

        <MobileContainer>
          {cartProducts && cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <Body key={product.id}>
                <img className="imagem" src={product.url} />
                <div className="body">
                  <p className="nome">{product.name}</p>
                  <div className="quantity-container">
                    <button onClick={() => decreaseProducts(product.id)}>-</button>
                    <p className="quantity">{product.quantity}</p>
                    <button onClick={() => increaseProducts(product.id)}>+</button>
                  </div>
                  <p className="items-price">{formatCurrency(product.quantity * product.price)}</p>
                  <button onClick={() => deletProducts(product.id)} className="lixeira">
                    🗑️
                  </button>
                </div>
              </Body>
              // -----------------------------------------------------
            ))
          ) : (
            <EmptyCart style={{ marginBottom: '25px' }}>🛒 Carrinho Vazio! 😢</EmptyCart>
          )}
        </MobileContainer>
      ) : (
        <BodyContainer>
          <Container>
            <Header>
              <p></p>
              <p style={{ paddingRight: 30 }}>Itens</p>
              <p style={{ paddingRight: 30 }}>Preço</p>
              <p style={{ paddingRight: 30 }}>Quantidade</p>
              <p style={{ paddingRight: 30 }}>Total</p>
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
        </BodyContainer>
      )}
    </>
  );
}
