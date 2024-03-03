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

  @media (max-width: 1071px) {
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
`;
// Imagem do lado do Login
export const LoginImage = styled.img`
  width: 531px;

  @media (max-width: 1071px) {
    display: none;
  }
`;

export const ContainerItens = styled.div`
  color: #eeeeee;
  background: #373737;
  border-radius: 0 10px 10px 0;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h1 {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    margin-top: 100px;
  }

  @media (max-width: 1071px) {
    border-radius: 10px;
    padding: 15px;
    margin-top: 20px;

    h1 {
      margin-top: 50px;
    }
  }
`;

export const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  margin-top: 28px;
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

  @media (max-width: 1071px) {
    /* width: calc(100% - 30px); */
    width: 80vw;
  }
`;

export const SignInLink = styled.p`
  height: normal;
  width: 300;

  a {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 1071px) {
    width: 100%;
    margin-top: 15px;
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
