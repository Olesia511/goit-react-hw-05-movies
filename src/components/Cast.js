import { useEffect, useState } from 'react';
import { fetchMovieCast } from './axiosMovies';
import { useParams } from 'react-router-dom';
import noPhoto from '../images/no-photo-min.png';

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
    <ul>
      {isLoading && <h2>LOADING......</h2>}
      {error && <h2>Sorry. Not found. {error.message}</h2>}
      {cast.map(({ character, id, name, profile_path }) => {
        return (
          <li key={id}>
            {character && <h3>Character: {character}</h3>}

            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
            ) : (
              <img src={noPhoto} alt={name} />
            )}
            {name && <h3>Name: {name} </h3>}
          </li>
        );
      })}
    </ul>
  );
};
