import { useEffect, useState } from 'react';
import { getFilmFullInfo } from '../servises/api';
import { Link, Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { useParams } from 'react-router';
// import { useLocation } from 'react-router';
import {
  MovieFullInfoWrapper, MovieInfoWrapper, GoBackButton} from './MovieDetailsPage.styled';
import { Suspense } from 'react';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  // const location = useLocation();

  const [fullInfo, setfullInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getFilmFullInfo(movieId)
      .then(fullInfo => {
        setfullInfo(fullInfo);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <div className="container">
      {isLoading && <Loader />}
      <GoBackButton>
        <Link to="location.state.from">Go Back</Link>
      </GoBackButton>
      <section>
        <MovieFullInfoWrapper>
          <img
            src={fullInfo.poster_path}
            alt={fullInfo.original_title}
            width="300"
          ></img>
          <MovieInfoWrapper>
            <h2>
              {fullInfo.original_title} (
              {new Date(fullInfo.release_date).getFullYear()})
            </h2>
            <p>Rating {Number(fullInfo.vote_average).toFixed(2)}</p>
            <h3>Overview</h3>
            <p>{fullInfo.overview}</p>
            <h4>Genres</h4>
            {fullInfo.genres && (
              <ul>
                {fullInfo.genres.map(result => (
                  <li key={result.id}>
                    <p>{result.name}</p>
                  </li>
                ))}
              </ul>
            )}
          </MovieInfoWrapper>
        </MovieFullInfoWrapper>
      </section>
      <section>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Review</Link>
          </li>
        </ul>
          <Suspense>
      <Outlet />
        </Suspense>
      </section>
    </div>
  );
}