import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPopularFilmList } from '../servises/api';
import { Loader } from 'components/Loader';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getPopularFilmList()
      .then(data => {
        setResults(data.results);
      })
      .catch(error => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      <ul>
        {results.map(result => (
          <li key={result.id}>
            <Link to={`/movies/${result.id}`} state={{ from: location }}>
              <h3>{result.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

