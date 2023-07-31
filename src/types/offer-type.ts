export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferCommentType = {
  id: string;
  idOffer: string;
  comments: Comment[];
};

export type Comment = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
}

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
