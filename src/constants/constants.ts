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
  Favorites
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
