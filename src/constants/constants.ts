import {Icon} from 'leaflet';

export enum AppRoutes {
  Root = '/',
  Login = '/login',
  Favorites = 'favorites',
  Offer = 'offer/:id',
  NotFound = '/*',
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

export enum ApiRoutes {
  Offer = '/six-cities/offers/{offerId}',
  Offers = '/six-cities/offers',
  OffersNearby = '/six-cities/offers/{offerId}/nearby',
  Favorite = '/six-cities/favorite',
  FavoriteStatus = '/six-cities/favorite/{offerId}/{status}',
  Comments = '/six-cities/comments/{offerId}',
  Login = '/six-cities/login',
  Logout = '/six-cities/logout',
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


