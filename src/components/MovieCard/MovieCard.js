import { Link, useLocation } from 'react-router-dom';
import { FormatDateYear } from 'components/FormatDate';
import {
  PosterMovie,
  SearchMovieCard,
  TitleSearchMovieCard,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const location = useLocation();
  const { id, title, vote_average, release_date, poster_path } = movie;

  return (
    <SearchMovieCard>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {poster_path && (
          <PosterMovie
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        )}

        {title && (
          <TitleSearchMovieCard>
            {title} {FormatDateYear(release_date)}
          </TitleSearchMovieCard>
        )}

        {vote_average > 0 && <p>Vote average: {vote_average.toFixed(2)}</p>}
      </Link>
    </SearchMovieCard>
  );
};
