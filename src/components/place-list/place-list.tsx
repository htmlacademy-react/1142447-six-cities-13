import { OfferType, Nullable } from '../../types/offer-type';
import PlaceCard from '../place-card/place-card';

type OfferListProps = {
  offers: OfferType[];
  setActiveCard: (offer: Nullable<OfferType>) => void;
}

const PlaceList = ({ offers, setActiveCard }: OfferListProps): JSX.Element => (

  <div className='cities__places-list places__list tabs__content'>
    {offers.map((item) => (
      <PlaceCard data={item} key={item.id} setActiveCard = {setActiveCard} />
    )
    )}
  </div>);

export default PlaceList;
