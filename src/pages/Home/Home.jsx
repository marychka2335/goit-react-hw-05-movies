import { Box } from './../../components/Box';
import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesTrends } from './../../Services/Api';

import {
  TrendCard,
  TrendList,
  TitleLink,
  TrendDesc,
  Title,
} from './Home.styled';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMoviesTrends().then(trending => {
      const newData = trending.results;

      setTrends(trends => {
        return [...trends, ...newData];
      });
    });
  }, []);

  return (
    <Box as="main">
      <Box as="h1" fontSize={34} fontWeight={500} mt={15} mb={15}>
        Trending today
      </Box>

      <TrendList>
        {trends.map(({ title, id, poster_path, release_date }, index) => (
          <TrendCard key={index}>
            <TitleLink to={`movies/${id}`} state={{ from: location }}>
              <img
                src={`https://api.themoviedb.org/3/movie/movie_id/images${poster_path}`}
                width={270}
                alt=""
              />
              <Title>{title}</Title>
            </TitleLink>
            <TrendDesc>
              Release date: {new Date(release_date).toLocaleDateString()}
            </TrendDesc>
          </TrendCard>
        ))}
      </TrendList>
      <Outlet />
    </Box>
  );
};
export default Home;

// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { fetchTrendingMovies } from '../../apiService/apiService';
// import { Films, Film, Wrapper } from './Home.styled';

// export default function Home() {
//   const [films, setFilms] = useState([]);
//   const location = useLocation();

//   useEffect(() => {
//     fetchTrendingMovies()
//       .then(response => setFilms([...response]))
//       .catch(error => console.log(error.message));
//   }, []);

//   return (
//     <Wrapper>
//       <Films>
//         {films.map(({ id, title }) => (
//           <li key={id}>
//             <Film to={`/movies/${id}`} state={{ from: location }}>
//               {title}
//             </Film>
//           </li>
//         ))}
//       </Films>
//     </Wrapper>
//   );
// }