import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { MockOffersList } from './mocks/offer-lists.ts';
import { MockOffers } from './mocks/offers.ts';
import { MockComments } from './mocks/comments.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerList={MockOffersList} offers={MockOffers} comments={MockComments} />
  </React.StrictMode>
);
