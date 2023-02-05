import React from 'react';
import { AuthProvider } from './context/Auth'

import Router from './router/Router';
import Global from './styles/Global';

const App = () => {
  return (
    <AuthProvider>
      <Router />
      <Global />
    </AuthProvider>
  )
}

export default App;