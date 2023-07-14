import classes from './page404.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/ui/logo/logo';

const PageNotFound = (): JSX.Element => (
  <div className="page page--gray page--main">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isActive />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">3</span>
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
      </div>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className={classes.noplaces}>
              <img src="img/honey-non.jpg" alt="image" width="300" height="215" />
              <h2 className={classes.noplaces__title}>404</h2>
              <p className={classes.noplaces__desk}>page not found</p>
              <Link className={classes.noplaces__link} to = "/">
                go to main page
              </Link>
            </div>
          </section>
          <div className="cities__right-section" style={{ backgroundImage: 'url(../img/img_404.jpg)' }}></div>
        </div>
      </div>
    </main>
  </div>

);

export default PageNotFound;
