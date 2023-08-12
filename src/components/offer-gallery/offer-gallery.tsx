import { DetailedOfferType } from '../../types/offer-type';

type OfferGalleryProps = {
  offer?: DetailedOfferType | undefined;
}

const OfferGallery = ({ offer }: OfferGalleryProps): JSX.Element => (
  <div className="offer__gallery-container container">
    <div className="offer__gallery">
      {offer?.images.map((image) => (
        <div className="offer__image-wrapper" key={image}>
          <img className="offer__image" src={image} alt="Photo studio" />
        </div>
      ))}
    </div>
  </div>
);

export default OfferGallery;
