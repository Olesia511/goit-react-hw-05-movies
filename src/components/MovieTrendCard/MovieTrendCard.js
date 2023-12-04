import { Link, useLocation } from 'react-router-dom';
import { TitleTrendCard, TrendCard } from './MovieTrendCard.styled';

export const MovieTrendCard = ({ movie }) => {
  const { title, name, id, poster_path } = movie;
  const location = useLocation();

  return (
    <TrendCard>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {poster_path && (
          <img
            style={{ height: 306, width: '100%', overflow: 'hidden' }}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        )}
        {title && <TitleTrendCard>{title}</TitleTrendCard>}
        {name && <TitleTrendCard>{name}</TitleTrendCard>}
      </Link>
    </TrendCard>
  );
};
