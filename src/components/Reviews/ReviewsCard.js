import { Link } from 'react-router-dom';
import noPhoto from '../../images/no-photo-min.png';
import { formatDateFull } from 'components/FormatDate';

export const ReviewsCard = ({ review }) => {
  const {
    url,
    author,
    content,
    created_at,
    author_details: { avatar_path, rating },
  } = review;

  return (
    <li>
      {author && (
        <h3>
          Author {author} created {formatDateFull(created_at)}
        </h3>
      )}
      {avatar_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${avatar_path}`}
          alt={author}
        />
      ) : (
        <img src={noPhoto} alt={author} />
      )}
      {content && <p>{content}</p>}
      {rating && <p>Rating: {rating}</p>}
      {url && <Link>{url}</Link>}
    </li>
  );
};
