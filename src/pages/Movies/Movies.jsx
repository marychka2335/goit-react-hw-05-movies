import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
// import {
//   MovieDesc,
//   Title,
//   TitleLink,
//   MovieCard,
//   MovieList,
// } from './Movies.styled';
import { MovieList } from './../../components/MovieList/MovieList';
import SearchFilms from './../../components/SearchForm/SearchForm';
import { Box } from './../../components/Box';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [page] = useState(1);
  console.log(searchParams.get);
  const location = useLocation();
  const urlValue = searchParams.get('query') ?? '';
  console.log(urlValue);
  useEffect(() => {
    if (urlValue === '') return;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWExMGZiNzYyMDgzZTBiYTg4M2ZjNmU4NjBmNzUxMiIsInN1YiI6IjY0NjU1MDE0MDA2YjAxMDE2ODRhMjBlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BDHjxE3xlwjt1Vmj0BYBvFDhjMr4ND7lLemmi809zrU',
      },
    };
    const KEY = '69a10fb762083e0ba883fc6e860f7512';
    const searchParam = new URLSearchParams({
      page,
      query: searchQuery !== '' ? searchQuery : urlValue,
      perPage: 12,
    });
    const URL = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${KEY}&${searchParam}`;
    fetch(URL, options)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(films => {
        console.log(films);
        setSearchMovie(films.results);
      })
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
        <MovieList films={searchMovie} state={{ from: location}} />
          
      )}
    </Box>
  );
};
export default Movies;