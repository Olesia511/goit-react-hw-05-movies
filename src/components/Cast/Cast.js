import { useEffect, useState } from 'react';
import { fetchMovieCast } from '../axiosMovies';
import { useParams } from 'react-router-dom';

import { CastList } from './CastList';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const id = useParams();

  useEffect(() => {
    const { movieId } = id;

    async function getMovieCast() {
      setIsLoading(true);
      setError(false);
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieCast();
  }, [id]);

  return (
    <div>
      {isLoading && <h2>LOADING......</h2>}
      {error && <h2>Sorry. Not found. {error}</h2>}
      {cast.length > 0 && <CastList cast={cast} />}
    </div>
  );
};
