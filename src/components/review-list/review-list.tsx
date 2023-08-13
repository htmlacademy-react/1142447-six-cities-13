import { Reviews } from '../../types/offer-type';
import ReviewItem from '../reviews-item/review-item';

type ReviewsListType = {
  reviewOffer: Reviews;
}

const ReviewList = ({reviewOffer} : ReviewsListType) => {
  const {reviews} = reviewOffer;

  return (
    <ul className="reviews__list">
      {reviews.map((item) => <ReviewItem review = {item} key = {item.id}/>)}
    </ul >
  );
};

export default ReviewList;
