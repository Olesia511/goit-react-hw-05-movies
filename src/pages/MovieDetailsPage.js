import { fetchMovieDetails } from 'components/axiosMovies';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLink = useRef(location);

  const id = useParams();

  useEffect(() => {
    const { movieId } = id;

    if (!movieId) {
      return;
    }

    const getMovie = async id => {
      try {
        setIsLoading(true);
        setError(false);

        const resp = await fetchMovieDetails(id);
        setMovie(resp);
      } catch (error) {
        console.log(`Catch error message`, error.message);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie(movieId);
  }, [id]);

  const Genres = () => {
    const { genres } = movie;

    if (genres.length > 0) {
      return genres.map(({ id, name }) => (
        <span key={id}> {name.toLowerCase()} </span>
      ));
    }
  };

  const { title, overview, poster_path, release_date, vote_average } = movie;

  return (
    <div>
      <Link to={backLink.current.state?.from ?? '/'}>
        <AiOutlineArrowLeft /> GO BACK
      </Link>
      {isLoading && <h2>LOADING......</h2>}
      {error && <h2>Sorry. Not found. {error.message}</h2>}
      <div>
        {title && (
          <h2>
            {title} ({release_date && release_date.split('-')[0]})
          </h2>
        )}

        {vote_average > 0 && <p> Vote average: {vote_average.toFixed(2)}</p>}
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