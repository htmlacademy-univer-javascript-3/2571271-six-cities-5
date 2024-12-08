import { OfferList } from './offer-list.ts';

export const sorting = {
  Popular: () => 0,
  'Price: low to high': (a: OfferList, b: OfferList) => a.price - b.price,
  'Price: high to low': (a: OfferList, b: OfferList) => b.price - a.price,
  'Top rated first': (a: OfferList, b: OfferList) => b.rating - a.rating,
};

export type SortingOrder = keyof typeof sorting;
