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
      <Box as="h1" fontSize={25} fontWeight={600} mt={25} mb={25} >
        Trending today
      </Box>

      <TrendList>
        {trends.map(({ title, poster_path, release_date, id }, index) => (
          <TrendCard key={index}>
            <TitleLink to={`movies/${id}`} state={{ from: location }}>
              <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width={230}
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

