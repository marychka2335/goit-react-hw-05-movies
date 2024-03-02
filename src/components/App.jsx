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
// import {lazy} from 'react';
// import { Route, Routes } from 'react-router-dom';
// import SharedLayout from './SharedLayout/SharedLayout';
// // import styled from "styled-components";

// const Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('../components/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('../components/Cast/Cast'));
// const Reviews = lazy(() => import('../components/Reviews/Reviews'));


// export function App() {
//   return (
//     <div>
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:moviesId" element={<MovieDetails />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="*" element={<Home />} />
//       </Route>
//     </Routes>
//     </div>
//   );

  
// }

