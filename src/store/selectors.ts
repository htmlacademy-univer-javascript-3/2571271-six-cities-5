import { createSelector } from '@reduxjs/toolkit';

import { State } from '../types/state.ts';
import { sorting } from '../types/sortings.ts';

export const cityOffersSelector = createSelector(
  [
    (state: State) => state.offers.offers,
    (state: State) => state.offers.sortingOrder,
    (state: State) => state.city.city,
  ],
  (offers, order, city) =>
    offers.filter((o) => o.city.name === city).sort(sorting[order])
);
