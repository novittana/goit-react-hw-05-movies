import { useState, useEffect } from 'react';
import { getMovieActors } from '../servises/api';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { CastList, CastListEl, CastLisCharacter } from './Cast.styled';

export default function Cast() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState('');

  const defaultPath =
    'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';
  
 const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieActors(movieId)
      .then(data => {
        setResults(data.cast);
      })
      .catch(error => { console.log(error.message);})
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);



  return (
    <div>
      {isLoading && <Loader />}
      {results && (
        <CastList>
          {results.map(result => (
            <CastListEl key={result.id}>
                <div>
                  <img
                    src={
                      result.profile_path ? `https://image.tmdb.org/t/p/w500${result.profile_path}`: defaultPath
                    }
                    alt={result.name}
                    width="200px"
                  />
                </div>
              <div>
                <h3>{result.name}</h3>
                <CastLisCharacter>
                  Character: {result.character}
                </CastLisCharacter>
              </div>
            </CastListEl>
          ))}
        </CastList>
      )}
    </div>
  );
}

