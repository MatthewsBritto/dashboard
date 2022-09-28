import React from 'react';
import { GlobalProvider } from './global';


const AppProvider = ({ children }) => (
  <GlobalProvider>
      {children}
  </GlobalProvider>
);

export default AppProvider;