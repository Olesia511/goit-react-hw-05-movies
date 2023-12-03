import { fetchMovieByName } from 'components/axiosMovies';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import noPhoto from '../images/no-photo-min.png';
import { format, parseISO } from 'date-fns';

const MoviesPage = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // =======================
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  const handleChangeQueryParam = newQuery => {
    params.set('query', newQuery);
    setParams(params);
  };

  const getMovieByQuery = evt => {
    evt.preventDefault();

    async function queryMovie() {
      try {
        setIsLoading(true);
        setError(false);
        const { results } = await fetchMovieByName(query);
        console.log(`resp`, results);
        setMovie(results);
      } catch (error) {
        console.log(`Catch error message`, error.message);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    queryMovie();
  };

  function formatDate(date) {
    const parsedDate = parseISO(date);
    return format(parsedDate, 'yyyy');
  }

  return (
    <div>
      {isLoading && <h2>LOADING......</h2>}
      {error && <h2>Sorry. {error.message}.</h2>}
      <input
        type="text"
        value={query}
        onChange={evt => handleChangeQueryParam(evt.target.value)}
        placeholder="Movie title"
      ></input>
      <button type="submit" onClick={getMovieByQuery}>
        Search
      </button>
      <ul>
        {movie.length > 0 &&
          movie.map(
            ({
              id,
              title,
              vote_average,
              release_date,
              poster_path,
              overview,
            }) => {
              return (
                <li key={id}>
                  {title && (
                    <h3>
                      {title} {formatDate(release_date)}
                    </h3>
                  )}
                  {vote_average > 0 && (
                    <p>Vote average: {vote_average.toFixed(2)}</p>
                  )}
                  {poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                      alt={title}
                    />
                  ) : (
                    <img src={noPhoto} alt={title} />
                  )}
                  {overview && <p>{overview}</p>}
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};
export default MoviesPage;
