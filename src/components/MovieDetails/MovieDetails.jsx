// import { useEffect, useState, useRef, Suspense } from 'react';
// import { Outlet, useLocation, useParams } from 'react-router-dom';
// import { fetchMovieDetailes } from './../../apiService/apiService';
// // import { ButtonBack, Section, Wrapper, Title, SubTitle, Text, Genres, LinkWrapper, StyledLink } from './MovieDetails.styled';
// import arrow from '../../images/arrow.svg'

// export default function MovieDetails() {
//   const [film, setFilm] = useState({});
//   const { moviesId } = useParams();
//   const location = useLocation();
//   const backLinkLocationRef = useRef(location.state?.from ?? '/');

//   useEffect(() => {
//     fetchMovieDetailes(moviesId)
//       .then(response => setFilm({ ...response.data }))
//       .catch(error => console.log(error.message));
//   }, [moviesId]);

//   return (
//     <>
//       <ButtonBack to={backLinkLocationRef.current}><img src={arrow} alt='arrow' width={20}></img>Go back</ButtonBack>
//       <Section>
//         <Wrapper>
//           {
//           <img
//             src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
//             alt={film.title}
//           />
//         }
//         <div>
//           <Title>{film.title}</Title>
//           <Text>User score: {film.vote_average}</Text>
//           <SubTitle>Overview</SubTitle>
//           <Text>{film.overview}</Text>
//           <SubTitle>Genres</SubTitle>
//           <Genres>
//             {film.genres?.map(({ id, name }) => (
//               <li key={id}>{name}</li>
//             ))}
//           </Genres>
//         </div>
//         </Wrapper>
//         <div>
//           <SubTitle>Additional information</SubTitle>
//           <LinkWrapper>
//           <StyledLink to="cast">Cast</StyledLink>
//         <StyledLink to="reviews">Reviews</StyledLink></LinkWrapper>
//         </div>
//         <Suspense fallback={<div>Loading...</div>}>
//           {' '}
//           <Outlet />
//         </Suspense>
//       </Section>
//     </>
//   );
// }