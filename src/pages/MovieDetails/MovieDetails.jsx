import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect, Suspense } from 'react';
import { Box } from './../../components/Box';
import { fetchMoviesDetails } from './../../Services/Api';
import { Triangle } from 'react-loader-spinner';
import { useRef } from 'react';
import { TitleLink, BtnBack } from './../../pages/Home/Home.styled';
const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  console.log(backLinkRef);
  console.log(location);

  useEffect(() => {
    fetchMoviesDetails(movieId).then(setMovie);
  }, [movieId]);
  if (!movie) {
    return null;
  }

  const { poster_path, release_date, popularity, overview, genres, title } =
    movie;

  return (
    <Box as="main">
      <TitleLink to={backLinkRef.current}>
        <BtnBack type="button">Go back</BtnBack>
      </TitleLink>
      <Box
        as="section"
        pt={15}
        pb={15}
        display="flex"
        gridGap={70}
        borderBottom="2px solid orange"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width={250}
          alt=""
        />
        <Box
          as="div"
          display="flex"
          flexDirection="column"
          gridGap={20}
          width={900}
        >
          <h1>{title}</h1>
          <Box as="div" display="flex" flexDirection="column" gridGap={10}>
            <p>Release date: {new Date(release_date).toLocaleDateString()}</p>
            <p>User score: {Number(popularity).toFixed(0)}%</p>
          </Box>

          <Box as="div" display="flex" flexDirection="column" gridGap={10}>
            <h2>Overview:</h2>
            <p>{overview}</p>
          </Box>
          <Box as="div" display="flex" flexDirection="column" gridGap={10}>
            <h2>Genres:</h2>
            <p>{genres.map(({ name }) => name).join(' ')}</p>
          </Box>
        </Box>
      </Box>
      <Box
        as="section"
        pt={15}
        pb={15}
        borderBottom="2px solid orange"
        display="flex"
        alignItems="center"
        gridGap={10}
      >
        <h3>Additional information:</h3>
        <NavItem to="cast">Cast</NavItem>
        <NavItem to="reviews">Reviews</NavItem>
      </Box>
      <Suspense
        fallback={
          <div>
            <Triangle
              height="80"
              width="80"
              color="orange"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Box>
  );
};
export default MoviesDetails;
// style
const NavItem = styled(NavLink)`
  color: black;
  font-size: 24px;
  text-decoration: underline;

  &.active {
    color: orange;
  }

  :hover:not(.active) {
    color: orange;
  }
`;