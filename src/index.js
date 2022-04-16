import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <CustomProvider theme="dark">
      <App />
    </CustomProvider> 
  </Provider>
);
