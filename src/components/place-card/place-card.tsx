import { OfferType } from '../../types/offer-type';
import { Link } from 'react-router-dom';
import { FIVE_STARS } from '../const';

type PlaceCardProps = {
  data: OfferType;
}


const PlaceCard = ({ data }: PlaceCardProps): JSX.Element => {
  const euro = String.fromCodePoint(0x020AC);
  return (
    <article className="cities__card place-card">
      {data.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> :
        null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to='/'>
          <img className="place-card__image" src={data.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{euro}{data.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={
            data.isFavorite ?
              'place-card__bookmark-button button place-card__bookmark-button--active' :
              'place-card__bookmark-button button'
          } type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${data.rating / FIVE_STARS * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/offer">{data.title}</Link>
        </h2>
        <p className="place-card__type">{data.type}</p>
      </div>
    </article>
  );
};


export default PlaceCard;
