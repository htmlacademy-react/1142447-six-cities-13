import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateRoute = ({ authorizationStatus, children }: PrivateRouteProps): JSX.Element => (
  authorizationStatus === AuthorizationStatus.NoAuth
    ? <Navigate to={AppRoute.Login} />
    : children
);

export default PrivateRoute;
