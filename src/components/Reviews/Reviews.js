import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../axiosMovies';
import { ReviewsList } from './ReviewsList';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const id = useParams();

  useEffect(() => {
    const { movieId } = id;

    async function getMovieReviews() {
      setIsLoading(true);
      setError(false);
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieReviews();
  }, [id]);

  return (
    <div>
      {isLoading && <h2>LOADING......</h2>}
      {error && <h2>Sorry. Not found. {error}</h2>}
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <h3>We don't have any reviews for this movie.</h3>
      )}
    </div>
  );
};
