import { useEffect, useState } from 'react';
import {  useSearchParams } from 'react-router-dom';
import { MovieList } from './../../components/MovieList/MovieList';
import SearchFilms from './../../components/SearchForm/SearchForm';
import { Box } from './../../components/Box';
import { options, fetchMovieByQuery } from './../../Services/Api';

export default function Movies() {
  const [searchMovie, setSearchMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const urlValue = searchParams.get('query') ?? '';
   
  useEffect(() => {
    if (urlValue === '') { return; }
    fetchMovieByQuery(urlValue, options)
      .then(response => setSearchMovie([...response]))
      .catch(err => console.error(err));
  }, [ urlValue]);
  const handleSubmit = searchQuery => {
    const nextParams = searchQuery !== '' ? { query: searchQuery } : {};
    setSearchParams(nextParams);
    setSearchMovie(null);
   };
  return (
    <Box as="main">
      <SearchFilms onSubmit={handleSubmit} />
      {searchMovie && (
        <MovieList films={searchMovie} />
          
      )}
        
    </Box>
  );
}
