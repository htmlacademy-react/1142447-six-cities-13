import { OfferType } from '../../types/offer-type';
import FavoriteCard from '../favorite-card/favorite-card';
import { Cities } from '../const';

type FavoriteListProps = {
  offers: OfferType[];
}

const FavoriteList = ({ offers }: FavoriteListProps): JSX.Element => {
  const favoritesList = offers.filter((offer) => offer.isFavorite);
  const getFavOffersCity = (city: string) => favoritesList.filter((item) => item.city.name.toLowerCase() ===
  city.toLowerCase());

  return (
    <ul className="favorites__list">
      {Object.keys(Cities).map((city) => (
        favoritesList.some((item) => item.city.name.toLowerCase() === city.toLowerCase()) &&
<li className="favorites__locations-items" key={city}>
  <div className="favorites__locations locations locations--current">
    <div className="locations__item">
      <a className="locations__item-link" href="#">
        <span>{city}</span>
      </a>
    </div>
  </div>
  <div className="favorites__places">
    {getFavOffersCity(city).map((item) => (
      <FavoriteCard data={item} key={item.id} />
    ))}
  </div>
</li>
      ))}
    </ul>
  );
};

export default FavoriteList;
