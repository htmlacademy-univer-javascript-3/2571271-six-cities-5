import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const PLACES_COUNT = 227;

root.render(
  <React.StrictMode>
    <App placesCount={PLACES_COUNT}/>
  </React.StrictMode>
);