import { Box } from './../../components/Box';
import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesTrends } from './../../Services/Api';
import { MovieList } from './../../components/MovieList/MovieList'

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

      <MovieList films={ trends } state={{ from: location }} />
     
      <Outlet />
    </Box>
  );
};
export default Home;