/* eslint-disable import-helpers/order-imports */
import React from 'react';
import PropTypes from 'prop-types';

import { ContainerButton } from './style';
function Button({ children, ...rest }) {
  return <ContainerButton {...rest}>{children}</ContainerButton>;
}

export default Button;

Button.propType = {
  children: PropTypes.string,
};
