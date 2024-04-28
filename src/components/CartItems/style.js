/* eslint-disable import-helpers/order-imports */
import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  background-color: #141f1f;
  box-shadow: 0px 10px 40px rgb(137 137 137);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 10px;
  border-bottom: 1px solid white;
  p {
    font-size: 16px;
  }
`;
export const BodyContainer = styled.div`
  overflow-x: auto;
`;

export const Body = styled.div`
  @media (max-width: 700px) {
    background-color: #141f1f;
    gap: 20px 20px;
    border-bottom: 0.8px solid white;
    border-radius: 15px;
    margin-bottom: 15px;
    img {
      width: 100px; /* Define a largura da imagem */
    }

    .body {
      display: grid;
      grid-gap: 10px 15vw;
      grid-template-areas:
        'nome  quantity'
        'items-price lixeira';
    }

    .lixeira {
      grid-area: lixeira;
    }

    .quantity {
      display: flex;
      grid-area: quantity;
      justify-content: space-between;
    }

    .nome {
      grid-area: nome;
    }

    .items-price {
      grid-area: items-price;
    }
    width: auto;
  }

  width: auto;

  .lixeira {
    width: 100px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
  }
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 10px;
  width: max-content;
  grid-gap: 10px 10px;
  img {
    border-radius: 10px;
    width: 120px;
  }
  p {
    margin-top: 6px;
    font-size: 16px;
  }
  .quantity-container {
    display: flex;
    gap: 20px;

    button {
      width: 12px;
      height: 30px;
      background: transparent;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: white;
    }
  }
`;

export const EmptyCart = styled.p`
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;

// Estilo para dispositivos móveis
export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
