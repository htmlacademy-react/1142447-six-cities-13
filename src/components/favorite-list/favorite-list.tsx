import { OfferType } from '../../types/offer-type';
import FavoriteCard from '../favorite-card/favorite-card';
import { Cities } from '../const';

type FavoriteListProps = {
  favorites: OfferType[];
}

const FavoriteList = ({ favorites }: FavoriteListProps): JSX.Element => (
  <ul className="favorites__list">
    {favorites.filter((item) => item.city.name.toLowerCase() === Cities.Paris.toLowerCase()).length ?
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{Cities.Paris}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {favorites.filter((item) => item.city.name.toLowerCase() === Cities.Paris.toLowerCase())
            .map((item) => (
              <FavoriteCard data={item} key={item.id} />
            ))}
        </div>
      </li> :
      null}
    {favorites.filter((item) => item.city.name.toLowerCase() === Cities.Amsterdam.toLowerCase()).length ?
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{Cities.Amsterdam}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {favorites.filter((item) => item.city.name.toLowerCase() === Cities.Amsterdam.toLowerCase())
            .map((item) => (
              <FavoriteCard data={item} key={item.id} />
            ))}
        </div>
      </li> :
      null}
    {favorites.filter((item) => item.city.name.toLowerCase() === Cities.Brussels.toLowerCase()).length ?
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{Cities.Brussels}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {favorites.filter((item) => item.city.name.toLowerCase() === Cities.Brussels.toLowerCase())
            .map((item) => (
              <FavoriteCard data={item} key={item.id} />
            ))}
        </div>
      </li> :
      null}
    {favorites.filter((item) => item.city.name.toLowerCase() === Cities.Cologne.toLowerCase()).length ?
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{Cities.Cologne}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {favorites.filter((item) => item.city.name.toLowerCase() === Cities.Cologne.toLowerCase())
            .map((item) => (
              <FavoriteCard data={item} key={item.id} />
            ))}
        </div>
      </li> :
      null}
    {favorites.filter((item) => item.city.name.toLowerCase() === Cities.Dusseldorf.toLowerCase()).length ?
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{Cities.Dusseldorf}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {favorites.filter((item) => item.city.name.toLowerCase() === Cities.Dusseldorf.toLowerCase())
            .map((item) => (
              <FavoriteCard data={item} key={item.id} />
            ))}
        </div>
      </li> :
      null}
    {favorites.filter((item) => item.city.name.toLowerCase() === Cities.Hamburg.toLowerCase()).length ?
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{Cities.Hamburg}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {favorites.filter((item) => item.city.name.toLowerCase() === Cities.Hamburg.toLowerCase())
            .map((item) => (
              <FavoriteCard data={item} key={item.id} />
            ))}
        </div>
      </li> :
      null}

  </ul>
);

export default FavoriteList;
