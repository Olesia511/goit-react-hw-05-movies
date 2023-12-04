import { StyledReviewsList } from './Reviews.styled';
import { ReviewsCard } from './ReviewsCard';

export const ReviewsList = ({ reviews }) => {
  return (
    <StyledReviewsList>
      {reviews.length > 0 &&
        reviews.map(review => <ReviewsCard key={review.id} review={review} />)}
    </StyledReviewsList>
  );
};
