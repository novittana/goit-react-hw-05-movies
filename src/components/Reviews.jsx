import { useState, useEffect } from 'react';
import { getMovieReviews } from '../servises/api';
import { Loader } from './Loader';
import { useParams } from 'react-router-dom';


export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieReviews(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);
  
  return (
    <div>
      {isLoading && <Loader />}
      { reviews.length === 0 &&(
        <p>We don't have any revievs for this movie {reviews}</p>
      )}
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author:{review.author_details.username}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
