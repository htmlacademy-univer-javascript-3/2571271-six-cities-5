import { Location } from './location.ts';
import { OfferList } from './offer-list.ts';

export type State = {
  city: Location;
  offers: OfferList[];
};
