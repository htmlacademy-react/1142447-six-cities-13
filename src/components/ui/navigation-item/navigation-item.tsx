import { NavLink } from 'react-router-dom';

type NavLinkProps = {
  nameCity: string;
  path: string;
  isActive: boolean;
}

const NavigationItem = ({ nameCity, path, isActive }: NavLinkProps): JSX.Element => (
  <li className="locations__item">
    <NavLink to={path}
      className={() =>
        isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
    >
      {nameCity}
    </NavLink>
  </li>
);

export default NavigationItem;
