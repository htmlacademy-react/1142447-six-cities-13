import { DetailedOfferType } from '../types/offer-type';

export const detailedOffers: DetailedOfferType[] = [
  {
    id: '2f0f1823-f620-43f5-91f9-530386ab335b',
    title: 'Nice, cozy, warm big bed apartment',
    description:
      'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    type: 'apartment',
    price: 313,
    images: [
      'https://13.design.pages.academy/static/hotel/3.jpg',
      'https://13.design.pages.academy/static/hotel/2.jpg',
      'https://13.design.pages.academy/static/hotel/11.jpg',
      'https://13.design.pages.academy/static/hotel/13.jpg',
      'https://13.design.pages.academy/static/hotel/18.jpg',
      'https://13.design.pages.academy/static/hotel/20.jpg',
    ],
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
    goods: [
      'Cable TV',
      'Breakfast',
      'Towels',
      'Coffee machine',
      'Air conditioning',
      'Washing machine',
      'Laptop friendly workspace',
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Baby seat',
      'Dishwasher',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
    },
    isPremium: true,
    isFavorite: false,
    rating: 1.8,
    bedrooms: 4,
    maxAdults: 6,
  },

  {
    id: '0fd2fff4-cba8-457a-9aa9-20a4112359b5',
    title: 'Perfectly located Castro',
    description:
      'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    type: 'house',
    price: 571,
    images: [
      'https://13.design.pages.academy/static/hotel/8.jpg',
      'https://13.design.pages.academy/static/hotel/9.jpg',
      'https://13.design.pages.academy/static/hotel/4.jpg',
      'https://13.design.pages.academy/static/hotel/11.jpg',
      'https://13.design.pages.academy/static/hotel/14.jpg',
      'https://13.design.pages.academy/static/hotel/12.jpg',
    ],
    city: {
      name: 'Paris',
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
    goods: [
      'Kitchen',
      'Dishwasher',
      'Coffee machine',
      'Wi-Fi',
      'Air conditioning',
      'Fridge',
      'Washer',
      'Cable TV',
    ],
    host: {
      isPro: true,
      name: 'Keks',
      avatarUrl:
        'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
    },
    isPremium: true,
    isFavorite: false,
    rating: 2.9,
    bedrooms: 1,
    maxAdults: 6,
  },

  {
    id: 'e1e84192-8fb2-4af2-a565-f87191ad1da9',
    title: 'Loft Studio in the Central Area',
    description:
      'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    type: 'hotel',
    price: 137,
    images: [
      'https://13.design.pages.academy/static/hotel/13.jpg',
      'https://13.design.pages.academy/static/hotel/8.jpg',
      'https://13.design.pages.academy/static/hotel/16.jpg',
      'https://13.design.pages.academy/static/hotel/4.jpg',
      'https://13.design.pages.academy/static/hotel/19.jpg',
      'https://13.design.pages.academy/static/hotel/14.jpg',
    ],
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
    goods: ['Towels', 'Cable TV', 'Laptop friendly workspace'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
    },
    isPremium: false,
    isFavorite: false,
    rating: 2.3,
    bedrooms: 2,
    maxAdults: 10,
  },

  {
    id: 'c660399d-1995-40a6-a81c-5e907883e9ba',
    title: 'Canal View Prinsengracht',
    description:
      'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    type: 'apartment',
    price: 395,
    images: [
      'https://13.design.pages.academy/static/hotel/9.jpg',
      'https://13.design.pages.academy/static/hotel/12.jpg',
      'https://13.design.pages.academy/static/hotel/5.jpg',
      'https://13.design.pages.academy/static/hotel/6.jpg',
      'https://13.design.pages.academy/static/hotel/10.jpg',
      'https://13.design.pages.academy/static/hotel/19.jpg',
    ],
    city: {
      name: 'Paris',
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
    goods: ['Towels', 'Kitchen', 'Air conditioning', 'Wi-Fi', 'Baby seat'],
    host: {
      isPro: true,
      name: 'Misha',
      avatarUrl:
        'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
    },
    isPremium: false,
    isFavorite: false,
    rating: 2.5,
    bedrooms: 4,
    maxAdults: 1,
  },
];
