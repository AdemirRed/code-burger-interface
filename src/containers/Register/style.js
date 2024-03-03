/* eslint-disable import-helpers/order-imports */
import styled from 'styled-components';
import Background from '../../assets/img/background.svg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  @media (max-width: 1030px) {
    height: 108vh;
    width: 100vw;
  }
`;

export const RegisterImage = styled.img`
  height: 75%;
  @media (max-width: 1030px) {
    display: none;
  }
`;

export const ContainerItens = styled.div`
  color: #eeeeee;
  background: #373737;
  border-radius: 0 10ox 10px 0;
  height: 75%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    margin-top: 10px;
  }

  @media (max-width: 1030px) {
    min-width: max-content;
    max-width: max-content;
  }
`;

export const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  margin-top: ${(props) => (props.error ? '12px' : '20px')};
  margin-bottom: 5px;
  color: #eeeeee;
`;

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  box-shadow: 5px 5px 10px;
  border-radius: 20px;
  border: ${(props) => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
  @media (max-width: 1030px) {
    width: 70vw;
  }
`;

export const SignInLink = styled.p`
  height: normal;
  width: 300;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 5px;
`;
