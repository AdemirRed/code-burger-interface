/* eslint-disable import-helpers/order-imports */
import React, { createContext, useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const UseContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const putUserData = async (userInfo) => {
    setUserData(userInfo);

    await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo));
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('codeburger:userData');

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo));
      }
    };

    loadUserData();
  }, []);

  return <UseContext.Provider value={{ putUserData, userData }}>{children}</UseContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UseContext);

  if (!context) {
    throw new Error('useUser must be used with UserContext');
  }

  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
