import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const';

import PageMain from '../pages/page-main/page-main';
import Favorites from '../pages/favorites/favorites';
import PageLogin from '../pages/page-login/page-login';
import Offer from '../pages/offer/offer';
import PageNotFound from '../pages/no-found-page/page-not-found';
import PrivateRoute from './privat-route/privat-route';
import { OfferType } from '../types/offer-type';

type AppProps = {
  offersCount: number;
  offersList: OfferType[];
}

const App = ({ offersCount, offersList }: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main}>
        <Route
          index
          element={<PageMain offersCount={offersCount} offers = {offersList} />}
        />
        <Route
          path={AppRoute.Favorites}
          element = {
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites favorites = {offersList.filter((offer) => offer.isFavorite)} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<PageLogin />}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
