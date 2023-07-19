import { NavLink } from 'react-router-dom';

type NavLinkProps = {
  title: string;
  path: string;
  isActive ?: boolean;
}

const NavigationItem = ({ title, path, isActive }: NavLinkProps): JSX.Element => (
  <li className="locations__item">
    <NavLink to={path}
      className={() =>
        isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
    >
      {title}
    </NavLink>
  </li>
);

export default NavigationItem;
