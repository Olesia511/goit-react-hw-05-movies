import { useEffect, useState } from 'react';
import { FormMovie } from 'components/Form/Form';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchMovieByName } from 'components/axiosMovies';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [arrMovie, setArrMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // =========  useSearchParams
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    queryMovie(query);
  }, [query]);

  const queryMovie = async query => {
    setIsLoading(true);
    try {
      setError(false);
      const { results } = await fetchMovieByName(query);
      if (results.length === 0 && query !== '') {
        setError('Wrong request. Try again.');
      }
      setArrMovie(results);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <FormMovie submit={queryMovie} />
      {isLoading && <h2>LOADING......</h2>}
      {error && <h2>Sorry. Not found. {error}</h2>}
      {arrMovie.length > 0 && <MovieList movies={arrMovie} />}
    </div>
  );
};
export default MoviesPage;
