import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type NavLinkProps = {
  title: string;
  path: string;
  currentCity: string;
  handlerLinkItem: (title: string) => void;
}

const NavigationItem = (props: NavLinkProps): JSX.Element => {
  const { title, path, handlerLinkItem, currentCity } = props;
  return (
    <li className="locations__item">
      <NavLink to={path}
        className={cn(
          'locations__item-link tabs__item',
          { 'tabs__item--active': currentCity === title }
        )}
        onClick={() => handlerLinkItem(title)}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
