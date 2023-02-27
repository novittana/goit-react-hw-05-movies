import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmListByKeyWord } from '../servises/api';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MoviesPage() {
   const location = useLocation();
  const [results, setResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === '') return;
    async function fetchMovieByQuery() {
      const results = await getFilmListByKeyWord(query);

      setResults(results.results);
    }
    fetchMovieByQuery();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {results && (
        <ul>
          {results.map(result => (
            <li key={result.id}>
              <Link to={`/movies/${result.id}`} state={{ from: location }}>
                <h3>{result.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
