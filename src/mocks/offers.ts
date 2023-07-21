import { OfferType } from '../types/offer-type';

export const offers : OfferType[] = [
  {
    id: '2f0f1823-f620-43f5-91f9-530386ab335b',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 716,
    previewImage: 'https://13.design.pages.academy/static/hotel/4.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.5,
  },
  {
    id: '39a1d17c-aafe-4d86-9a8b-d4353094b227',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 177,
    previewImage: 'https://13.design.pages.academy/static/hotel/15.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 2,
  },
  {
    id: 'fb3c6a5c-399f-41cb-8c01-93e32e9368b2',
    title: 'Tile House',
    type: 'house',
    price: 107,
    previewImage: 'https://13.design.pages.academy/static/hotel/12.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
  },
  {
    id: 'c1a075e5-6704-4bef-bc4d-7a85c1037ae9',
    title: 'House in countryside',
    type: 'hotel',
    price: 327,
    previewImage: 'https://13.design.pages.academy/static/hotel/3.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.6,
  },
];
