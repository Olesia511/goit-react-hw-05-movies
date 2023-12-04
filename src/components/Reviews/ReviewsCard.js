import noPhoto from '../../images/no-photo-min.png';
import { formatDateFull } from 'components/FormatDate';
import {
  AuthorName,
  Avatar,
  ContentContainer,
  ImgContainer,
  StyledReviewsCard,
} from './Reviews.styled';

export const ReviewsCard = ({ review }) => {
  const {
    url,
    author,
    content,
    created_at,
    author_details: { avatar_path, rating },
  } = review;

  return (
    <StyledReviewsCard>
      <ImgContainer>
        {author && <AuthorName>{author}</AuthorName>}
        {avatar_path ? (
          <Avatar
            src={`https://image.tmdb.org/t/p/w500/${avatar_path}`}
            alt={author}
          />
        ) : (
          <Avatar src={noPhoto} alt={author} />
        )}
      </ImgContainer>

      <ContentContainer>
        <p>Created {formatDateFull(created_at)}</p>
        {content && <p>{content}</p>}
        {rating && <p>Rating: {rating}</p>}
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        )}
      </ContentContainer>
    </StyledReviewsCard>
  );
};
