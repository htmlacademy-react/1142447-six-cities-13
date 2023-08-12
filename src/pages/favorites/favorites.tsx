import Header from '../../components/header/header';
import { OfferType } from '../../types/offer-type';
import FavoriteList from '../../components/favorite-list/favorite-list';
import { Link } from 'react-router-dom';

    type FavoritesProps = {
      offers: OfferType[];
    }

const Favorites = ({offers} : FavoritesProps): JSX.Element => (
  <div className="page">
    <Header isAuthorization />
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteList offers = {offers} />
        </section>
      </div>
    </main>
    <footer className="footer container">
      <Link className="footer__logo-link" to = "/">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  </div>
);

export default Favorites;
