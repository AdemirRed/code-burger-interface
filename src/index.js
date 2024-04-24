// eslint-disable-next-line import-helpers/order-imports
import React from 'react';
import { createRoot } from 'react-dom/client';

import { ToastContainer, toast } from 'react-toastify';

import Routes from './routes/routes';

import GlobalStyles from './styles/globalStyles';
import AppProvide from './hooks';
// Coloque o código para substituir console.info aqui
console.info = () => {};
// Coloque o código para substituir console.info aqui
console.info = () => {};

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <AppProvide>
      <Routes />
    </AppProvide>
    <ToastContainer autoClose={2000} theme="dark" />
    <GlobalStyles />
  </>
);
