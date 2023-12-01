import { fetchMovieDetails } from 'components/axiosMovies';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLink = useRef(location);

  const idMovie = useParams();

  useEffect(() => {
    if (!idMovie.movieId) {
      return;
    }

    getMovie(idMovie.movieId);
  }, [idMovie.movieId]);

  const getMovie = async id => {
    try {
      setIsLoading(true);
      setError(false);

      const resp = await fetchMovieDetails(id);
      setMovie({ ...resp });
    } catch (error) {
      console.log(`Catch error message`, error.message);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const Genres = () => {
    const { genres } = movie;

    if (genres.length > 0) {
      return genres.map(({ id, name }) => <span key={id}> {name} </span>);
    }
  };

  const { title, overview, poster_path, release_date, vote_average } = movie;

  return (
    <div>
      <h1>MovieDetails </h1>
      <Link to={backLink.current.state?.from ?? '/'}>Back to Home </Link>
      {isLoading && <h2>LOADING......</h2>}
      {error && <h2>ERROR ...</h2>}
      <div>
        {title && (
          <h2>
            {title} ({release_date && release_date.split('-')[0]})
          </h2>
        )}

        {vote_average > 0 && <p> Vote average {vote_average.toFixed()}⭐</p>}
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        )}

        {overview && <p>Overview: {overview}</p>}

        {movie.genres?.length > 0 && <div>Genres: {<Genres />}</div>}
      </div>
      <div>
        <ul>
          <li>
            <Link to="cast"> Cast </Link>
          </li>
          <li>
            <Link to="reviews"> Reviews </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
