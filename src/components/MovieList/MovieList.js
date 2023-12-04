import { MovieCard } from 'components/MovieCard/MovieCard';
import { SearchMovieList } from './MovieList,styled';

export const MovieList = ({ movies }) => {
  return (
    <SearchMovieList>
      {movies.length > 0 &&
        movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </SearchMovieList>
  );
};
