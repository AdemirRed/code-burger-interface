// eslint-disable-next-line import-helpers/order-imports
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Bounce, Flip, toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { useUser } from '../../hooks/UserContext';
import Button from '../../components/button';
import api from '../../services/api';
import LoginImg from '../../assets/img/logo2Login.svg';
import logo from '../../assets/img/logo.svg';

import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMessage,
} from './style';

const schema = Yup.object().shape({
  email: Yup.string().email('Digite um e-mail válido!').required('o campo e-mail é obrigatório'), // O campo 'email' é uma string válida e obrigatória
  password: Yup.string()
    .required('o campo senha é obrigatório')
    .min(6, 'A senha deve ter pelo menos 6 digitos!'), // O campo 'password' é uma string obrigatória
});

function Login() {
  const history = useHistory();
  const { putUserData } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (clientData) => {
    try {
      const { data } = await toast.promise(
        api.post('sessions', {
          email: clientData.email,
          password: clientData.password,
        }),
        {
          pending: 'Verificando seus dados!',
          success: 'Seja bem-vindo(a) 👌',
          error: 'Verifique E-mail e Senha🤯',
        }
      );
      putUserData(data);

      setTimeout(() => {
        history.push('/');
      }, 1000);

      // console.log(userData);
    } catch (error) {
      console.log('Ocorreu um erro:', error);
    }
  };
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={logo} alt="logo" width="350" style={{ margin: 'auto' }} />

        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register('email')} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input type="password" {...register('password')} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          {/* style={{ marginTop: 75, marginBottom: 25 }} */}
          <Button type="submit">SignIn</Button>
        </form>

        <SignInLink>
          Não possui conta?{'  '}
          <Link style={{ color: 'white' }} to="/cadastro">
            Sing Up
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  );
}

export default Login;
