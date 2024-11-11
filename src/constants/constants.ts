import {Icon} from 'leaflet';

export enum AppRoutes {
  Root = '/',
  Login = '/login',
  Favorites = 'favorites',
  Offer = 'offer/:id',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CardTypes {
  Cities,
  Favorites,
  Near,
}

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export enum RatingClasses{
  Offer,
  Comment,
  PlaceCard
}

export const defaultCustomIcon = new Icon({
  iconUrl:
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
export const currentCustomIcon = new Icon({
  iconUrl:
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
