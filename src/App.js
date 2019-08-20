import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
    </Router>
  );
}

export default App;
