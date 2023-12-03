import { fetchTrendingMovies } from 'components/axiosMovies';

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [moviesTrend, setMoviesTrend] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();

  useEffect(() => {
    getTrendMovies();
  }, []);

  const getTrendMovies = async () => {
    try {
      setIsLoading(true);
      setError(false);
      const { results } = await fetchTrendingMovies();
      setMoviesTrend([...results]);
    } catch (error) {
      console.log(`Catch error message`, error.message);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const ArrMoviesTrend = () =>
    moviesTrend.map(({ title, name, id, poster_path }) => (
      <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          {title ?? name}
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
          )}
        </Link>
      </li>
    ));

  return (
    <>
      <h1> Trending today</h1>
      {isLoading && <h2>LOADING......</h2>}
      {error && <h2>Sorry. Not found. {error.message}</h2>}
      {moviesTrend.length > 0 && <ul> {<ArrMoviesTrend />}</ul>}
    </>
  );
};

export default HomePage;
