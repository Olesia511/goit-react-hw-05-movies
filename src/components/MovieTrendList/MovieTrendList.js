import { MovieTrendCard } from 'components/MovieTrendCard/MovieTrendCard';
import { TrendList } from './MovieTrendList.styled';

export const MovieTrendList = ({ moviesTrend }) => {
  return (
    <TrendList>
      {moviesTrend.length > 0 &&
        moviesTrend.map(movie => (
          <MovieTrendCard key={movie.id} movie={movie} />
        ))}
    </TrendList>
  );
};
