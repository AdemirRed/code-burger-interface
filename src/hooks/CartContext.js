/* eslint-disable import-helpers/order-imports */
import React, { createContext, useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  let newCartProducts = [];
  const putProductsInCart = async (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);
    if (cartIndex >= 0) {
      newCartProducts = cartProducts;

      newCartProducts[cartIndex].quantity = newCartProducts[cartIndex].quantity + 1;
      setCartProducts(newCartProducts);
    } else {
      product.quantity = 1;
      newCartProducts = [...cartProducts, product];
      setCartProducts(newCartProducts);
    }

    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCartProducts));
  };

  const deletProducts = async (ProductId) => {
    const newCart = cartProducts.filter((product) => product.id !== ProductId);

    setCartProducts(newCart);
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCart));
  };

  // Acrescentar Produtos com o "+" no carrinho
  const increaseProducts = async (ProductId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === ProductId ? { ...product, quantity: product.quantity + 1 } : product;
    });

    setCartProducts(newCart);

    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCart));
  };

  // Diminuir Produtos com o "+" no carrinho
  const decreaseProducts = async (ProductId) => {
    const cartIndex = cartProducts.findIndex((pd) => pd.id === ProductId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === ProductId ? { ...product, quantity: product.quantity - 1 } : product;
      });
      setCartProducts(newCart);

      await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCart));
    } else {
      deletProducts(ProductId);
    }
  };

  //   Loading  dos produtos se o usúario fechar ou atualizar a pagina
  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo');

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData));
      }
    };

    loadUserData();
  }, []);

  return (
    <CartContext.Provider
      value={{ putProductsInCart, cartProducts, increaseProducts, decreaseProducts, deletProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart deve ser usado com UserContext.');
  }

  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
