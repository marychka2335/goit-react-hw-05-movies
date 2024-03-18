import axios from 'axios';
import PropTypes from 'prop-types';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'fe65ae3947785f9cceedf502c682301b';

export async function fetchMoviesTrends() {
  const trending = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return trending.data;
}

export async function fetchMoviesDetails(movieId) {
  const movie = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return movie.data;
}


export async function fetchMoviesCast(movieId) {
  const credits = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return credits.data;
}

export async function fetchMoviesReviews(movieId) {
  const reviews = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return reviews.data;
}

export async function fetchMovieByQuery(urlValue) {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${urlValue}&page=1&include_adult=false`);
    return response.data.results
}

export const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWExMGZiNzYyMDgzZTBiYTg4M2ZjNmU4NjBmNzUxMiIsInN1YiI6IjY0NjU1MDE0MDA2YjAxMDE2ODRhMjBlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BDHjxE3xlwjt1Vmj0BYBvFDhjMr4ND7lLemmi809zrU',
      },
    };

export const defaultImg = 'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

fetchMoviesReviews.propTypes = { movieId: PropTypes.number.isRequired };
fetchMoviesCast.propTypes = { movieId: PropTypes.number.isRequired };
fetchMoviesDetails.propTypes = { movieId: PropTypes.number.isRequired };
