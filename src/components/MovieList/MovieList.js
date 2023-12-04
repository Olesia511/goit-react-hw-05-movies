import { MovieCard } from 'components/MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.length > 0 &&
        movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </ul>
  );
};
