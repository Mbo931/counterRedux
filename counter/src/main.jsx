import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer/CounterSlice';
import App from './App';

// Configuration du store Redux
const store = configureStore({
  reducer: {
    counter: counterReducer, // Utilisation du reducer du compteur dans le store
  },
});

// Rendu de l'application avec le Provider Redux englobant
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);