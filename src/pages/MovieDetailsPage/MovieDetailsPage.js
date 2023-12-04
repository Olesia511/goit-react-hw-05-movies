import { fetchMovieDetails } from 'components/axiosMovies';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
  BackLink,
  CastList,
  ItemLinkCast,
  MovieCastContainer,
  MovieContainer,
  MovieData,
  StyledLink,
} from './MovieDetailsPage.styled';

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
        setError(error.message);
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
        <span key={id}> {name.toLowerCase()}, </span>
      ));
    }
  };

  const { title, overview, poster_path, release_date, vote_average } = movie;

  return (
    <div>
      <div style={{ height: 44 }}>
        <BackLink to={backLink.current.state?.from ?? '/'}>
          <AiOutlineArrowLeft /> GO BACK
        </BackLink>
      </div>

      {isLoading && <h2>LOADING......</h2>}
      {error && <h2>Sorry. Not found. {error}</h2>}
      <MovieContainer>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        )}
        <MovieData>
          {title && (
            <h2
              style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}
            >
              {title} ({release_date && release_date.split('-')[0]})
            </h2>
          )}

          {overview && (
            <div>
              <h3>Overview:</h3>
              <p>{overview}</p>
            </div>
          )}

          {movie.genres?.length > 0 && (
            <div>
              <h4>Genres:</h4>
              <p>{<Genres />}</p>
            </div>
          )}

          {vote_average > 0 && (
            <div>
              <h4>Vote average: </h4>
              <p> {vote_average.toFixed(2)}</p>
            </div>
          )}
        </MovieData>
      </MovieContainer>
      <MovieCastContainer>
        <CastList>
          <li>
            <StyledLink to="cast"> Cast </StyledLink>
          </li>
          <li>
            <StyledLink to="reviews"> Reviews </StyledLink>
          </li>
        </CastList>
        <Outlet />
      </MovieCastContainer>
    </div>
  );
};

export default MovieDetailsPage;
