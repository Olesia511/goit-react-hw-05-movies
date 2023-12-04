import { MovieTrendList } from 'components/MovieTrendList/MovieTrendList';
import { fetchTrendingMovies } from 'components/axiosMovies';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [moviesTrend, setMoviesTrend] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { results } = await fetchTrendingMovies();
        setMoviesTrend(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendMovies();
  }, []);

  return (
    <>
      <h1 style={{ marginBottom: 20, textAlign: 'center' }}> Trending today</h1>
      {isLoading && <h2>LOADING......</h2>}
      {error && <h2>Sorry. Not found. {error}</h2>}
      {moviesTrend.length > 0 && <MovieTrendList moviesTrend={moviesTrend} />}
    </>
  );
};

export default HomePage;
