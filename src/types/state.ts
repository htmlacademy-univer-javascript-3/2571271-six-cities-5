import { OfferList } from './offer-list.ts';
import { SortingOrder } from './sortings.ts';

export type State = {
  city: string;
  offers: OfferList[];
  sortingOrder: SortingOrder;
};
