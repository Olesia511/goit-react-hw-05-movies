import { Link, useLocation } from 'react-router-dom';
import noPhoto from '../../images/no-photo-min.png';
import { FormatDateYear } from 'components/FormatDate';

export const MovieCard = ({ movie }) => {
  const location = useLocation();
  const { id, title, vote_average, release_date, poster_path, overview } =
    movie;

  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title && (
          <h3>
            {title} {FormatDateYear(release_date)}
          </h3>
        )}
        {vote_average > 0 && <p>Vote average: {vote_average.toFixed(2)}</p>}
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        ) : (
          <img src={noPhoto} alt={title} />
        )}
        {overview && <p>{overview}</p>}
      </Link>
    </li>
  );
};
