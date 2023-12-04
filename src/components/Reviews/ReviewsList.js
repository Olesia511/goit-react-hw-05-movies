import { ReviewsCard } from './ReviewsCard';

export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.length > 0 &&
        reviews.map(review => <ReviewsCard key={review.id} review={review} />)}
    </ul>
  );
};
