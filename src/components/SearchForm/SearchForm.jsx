import { useState } from 'react';
import {
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './../../pages/Movies/Movies.styled';
import { IconMovieSearch } from './../../pages/Movies/MoviesSearchIcon';
const SearchFilms = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleQueryChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Enter the name of the movie');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };
  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          value={searchQuery}
          autocomplete="off"
          placeholder="Search movies"
          onChange={handleQueryChange}
        />
        <SearchFormBtn type="submit">
          <IconMovieSearch />
        </SearchFormBtn>
      </SearchForm>
    </div>
  );
};

export default SearchFilms;