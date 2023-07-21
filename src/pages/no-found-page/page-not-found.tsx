import classes from './page404.module.css';
import { Link } from 'react-router-dom';

const PageNotFound = (): JSX.Element => (
  <div className="page page--gray page--main">

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
