import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchMovieReviews } from './axiosMovies';
import { format, parseISO } from 'date-fns';

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

  function formatDate(date) {
    const parsedDate = parseISO(date);
    return format(parsedDate, 'yyyy MMMM  d');
  }

  return (
    <ul>
      {isLoading && <h2>LOADING......</h2>}
      {error && <h2>Sorry. {error.message}.</h2>}
      {reviews.length > 0 ? (
        reviews.map(
          ({
            id,
            url,
            author,
            content,
            created_at,
            author_details: { avatar_path, rating },
          }) => {
            return (
              <li key={id}>
                <h3>
                  Author {author} created {formatDate(created_at)}
                </h3>
                {avatar_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${avatar_path}`}
                    alt={author}
                  />
                )}
                <p>{content}</p>
                <p>Rating: {rating}</p>
                <Link>{url}</Link>
              </li>
            );
          }
        )
      ) : (
        <h3>We don't have any reviews for this movie.</h3>
      )}
    </ul>
  );
};
