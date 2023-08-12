import { useState } from 'react';
import NavigationItem from '../../components/ui/navigation-item/navigation-item';
import { AppRoute } from '../../components/const';
import Header from '../../components/header/header';
import { OfferType } from '../../types/offer-type';
import PlaceList from '../../components/place-list/place-list';
import { Cities } from '../../components/const';
import Map from '../../components/map/map';

type PageMainProps = {
  offers: OfferType[];
}

const cityDefault = 'Paris';

const PageMain = ({ offers }: PageMainProps): JSX.Element => {
  const [currentCity, setCurrentCity] = useState(cityDefault);

  const handlerMenuItem = (title: string) => {
    setCurrentCity(title);
  };
  const currentCityOffers = offers.filter((offer) => offer.city.name === currentCity);
  return (
    <div className="page page--gray page--main">
      <Header isAuthorization />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {Object.keys(Cities).map((city) => (
                <NavigationItem handlerLinkItem={handlerMenuItem}
                  title={city}
                  key={city}
                  path={AppRoute.Main}
                  currentCity={currentCity}
                />
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentCityOffers.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <PlaceList offers={currentCityOffers} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" >
                <Map currentOffers={currentCityOffers} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
};

export default PageMain;
