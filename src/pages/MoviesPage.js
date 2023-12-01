// import { fetchMovieByName } from 'components/axiosMovies';
import { fetchMovieByName } from 'components/axiosMovies';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // =======================
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  const updateQueryParam = newQuery => {
    params.set('query', newQuery);
    setParams(params);
  };

  const getMovieByQuery = async query => {
    try {
      setIsLoading(true);
      setError(false);
      const resp = await fetchMovieByName(query);
      console.log(`resp`, resp);
      setMovie({ ...resp });
    } catch (error) {
      console.log(`Catch error message`, error.message);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // const resetQueryParam = () => {
  //   setParams({ query: '' });
  // };
  //
  return (
    <div>
      <h1>MOVIES</h1>
      <input
        type="text"
        value={query}
        onChange={evt => updateQueryParam(evt.target.value)}
        placeholder="Movie title"
      ></input>
      <button
        type="button"
        onClick={evt => {
          console.log(`evt btn`, evt.target.value);
        }}
      >
        Search
      </button>
      {isLoading && <h2>LOADING......</h2>}
      {error && <h2>ERROR ...</h2>}
    </div>
  );
};
export default MoviesPage;
