import { Offer } from '../types/offer.ts';
import { MockPoints } from './points.ts';
import { MockLocations } from './locations.ts';
import { MockHosts } from './hosts.ts';

export const MockOffers: Offer[] = [
  {
    id: '0',
    title: 'Cozy apartment in the city center',
    type: 'apartment',
    price: 120,
    city: MockLocations[0],
    location: MockPoints[0],
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    description: 'A lovely apartment with a great view of the city.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'TV'],
    host: MockHosts[0],
    images: ['https://14.design.htmlacademy.pro/static/hotel/1.jpg', 'https://14.design.htmlacademy.pro/static/hotel/7.jpg'],
    maxAdults: 4
  },
  {
    id: '1',
    title: 'Spacious house with a garden',
    type: 'house',
    price: 250,
    city: MockLocations[1],
    location: MockPoints[1],
    isFavorite: false,
    isPremium: true,
    rating: 5.0,
    description: 'A beautiful house with a large garden and plenty of space.',
    bedrooms: 4,
    goods: ['Wi-Fi', 'Kitchen', 'TV', 'Garden'],
    host: MockHosts[1],
    images: ['https://14.design.htmlacademy.pro/static/hotel/1.jpg', 'https://14.design.htmlacademy.pro/static/hotel/8.jpg'],
    maxAdults: 6
  },
  {
    id: '2',
    title: 'Modern studio in the heart of the city',
    type: 'studio',
    price: 90,
    city: MockLocations[2],
    location: MockPoints[2],
    isFavorite: true,
    isPremium: false,
    rating: 4.0,
    description: 'A modern studio with all the necessary amenities.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Kitchen', 'TV'],
    host: MockHosts[2],
    images: ['https://14.design.htmlacademy.pro/static/hotel/1.jpg', 'https://14.design.htmlacademy.pro/static/hotel/9.jpg'],
    maxAdults: 2
  },
  {
    id: '3',
    title: 'Luxury villa with a pool',
    type: 'villa',
    price: 500,
    city: MockLocations[3],
    location: MockPoints[3],
    isFavorite: false,
    isPremium: true,
    rating: 5.0,
    description: 'A luxurious villa with a private pool and stunning views.',
    bedrooms: 5,
    goods: ['Wi-Fi', 'Kitchen', 'TV', 'Pool'],
    host: MockHosts[3],
    images: ['https://14.design.htmlacademy.pro/static/hotel/1.jpg', 'https://14.design.htmlacademy.pro/static/hotel/10.jpg'],
    maxAdults: 8
  },
  {
    id: '4',
    title: 'Charming cottage by the lake',
    type: 'cottage',
    price: 180,
    city: MockLocations[4],
    location: MockPoints[4],
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    description: 'A charming cottage with a beautiful view of the lake.',
    bedrooms: 3,
    goods: ['Wi-Fi', 'Kitchen', 'TV'],
    host: MockHosts[4],
    images: ['https://14.design.htmlacademy.pro/static/hotel/1.jpg', 'https://14.design.htmlacademy.pro/static/hotel/11.jpg'],
    maxAdults: 5
  },
  {
    id: '5',
    title: 'Stylish apartment in the historic district',
    type: 'apartment',
    price: 150,
    city: MockLocations[5],
    location: MockPoints[5],
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    description: 'A stylish apartment in the heart of the historic district.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'TV'],
    host: MockHosts[5],
    images: ['https://14.design.htmlacademy.pro/static/hotel/1.jpg', 'https://14.design.htmlacademy.pro/static/hotel/12.jpg'],
    maxAdults: 4
  }
];
