// eslint-disable-next-line import-helpers/order-imports
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../components';
import api from '../../services/api';
import RegisterImg from '../../assets/img/register-img.svg';
import logo from '../../assets/img/logo.svg';

import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMessage,
} from './style';
import { Link, useHistory } from 'react-router-dom';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo Nome é obrigatório'), // Nome obrigatório
  email: Yup.string().email('Digite um e-mail válido!').required('o campo e-mail é obrigatório'), // O campo 'email' é uma string válida e obrigatória
  password: Yup.string()
    .required('o campo senha é obrigatório')
    .min(6, 'A senha deve ter pelo menos 6 digitos!'), // O campo 'password' é uma string obrigatória
  confirmPassword: Yup.string()
    .required('o campo senha é obrigatório')
    .min(6, 'A senha deve ter pelo menos 6 digitos!')
    .oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
});

export function Register() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true }
      );
      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com Sucesso!', {});
        setTimeout(() => {
          history.push('/login');
        }, 1000);
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça Login para continuar! ');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente');
    }
  };

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="Register-image" />
      <ContainerItens>
        <img src={logo} alt="logo" width="250" style={{ margin: 'auto' }} />

        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input type="text" {...register('name')} error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input type="email" {...register('email')} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input type="password" {...register('password')} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>
            SignUp
          </Button>
        </form>

        <SignInLink>
          Já possui conta?{' '}
          <Link style={{ color: 'white' }} to="/login">
            Sing In
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  );
}
