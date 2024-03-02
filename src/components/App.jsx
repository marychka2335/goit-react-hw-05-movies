import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Box } from './Box';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('./../pages/Home/Home'));
const Movies = lazy(() => import('./../pages/Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MovieDetails = lazy(() => import('./../pages/MovieDetails/MovieDetails'));
const PageNotFound = lazy(() => import('./../pages/PageNotFound/PageNotFound'));

const App = () => {
  return (
    <Box as="div" pl={15} pr={15}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Box>
  );
};
export { App };
