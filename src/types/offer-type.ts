export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;


  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type CommentType = {
  idOffer: string;
  comments: Array<{
    id: string;
    comment: string;
    date: string;
    rating: number;
    user: {
      name: string;
      avatarUrl: string;
      isPro: boolean;
    };
  }>;
};
