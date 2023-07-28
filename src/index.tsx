import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { Setting } from './components/const';
import { offers } from './mocks/offers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>

    <App offersList = {offers} />

  </React.StrictMode>
);
