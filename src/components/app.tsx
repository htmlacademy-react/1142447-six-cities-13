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
  offersList: OfferType[];
}

const App = ({ offersList }: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main}>
        <Route
          index
          element={<PageMain offers = {offersList} />}
        />
        <Route
          path={AppRoute.Favorites}
          element = {
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites offers = {offersList} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<PageLogin />}
        />
        <Route path={AppRoute.Offer} element={<Offer />}>
          <Route path=':idOffer' element= {<Offer offers = {offersList} />} />
        </Route>

        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
