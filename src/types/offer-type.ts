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

export type DetailedOfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

export type Host ={
  name: string;
  avatarUrl: string;
  isPro: boolean;
}


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

export type Reviews = {
  idOffer: string;
  reviews: Comment[];
}

export type Nullable<T> = T | null;
