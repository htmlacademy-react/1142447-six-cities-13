import { OfferType } from '../../types/offer-type';
import PlaceCard from '../place-card/place-card';

type OfferListProps = {
  offers: OfferType[];
}

const PlaceList = ({ offers }: OfferListProps): JSX.Element => (
  <div className='cities__places-list places__list tabs__content'>
    {offers.map((item) => (
      <PlaceCard data={item} key={item.id} />
    )
    )}
  </div>);


export default PlaceList;
