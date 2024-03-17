import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MovieList } from './../../components/MovieList/MovieList';
import SearchFilms from './../../components/SearchForm/SearchForm';
import { Box } from './../../components/Box';
import { options, fetchMovieByQuery } from './../../Services/Api';

export default function Movies() {
  const [searchMovie, setSearchMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [page] = useState(1);
  const location = useLocation();
  const urlValue = searchParams.get('query') ?? '';
   
  useEffect(() => {
    if (urlValue === '') { return; }
    fetchMovieByQuery(urlValue, options)
      .then(response => setSearchMovie([...response]))
      .catch(err => console.error(err));
  }, [searchQuery, page, urlValue]);
  const handleSubmit = searchQuery => {
    const nextParams = searchQuery !== '' ? { query: searchQuery } : {};
    setSearchParams(nextParams);
    setSearchQuery(searchQuery);
    setSearchMovie(null);
   };
  return (
    <Box as="main">
      <SearchFilms onSubmit={handleSubmit} />
      {searchMovie && (
        <MovieList films={searchMovie} state={{ from: location }} />
          
      )}
        
    </Box>
  );
}
