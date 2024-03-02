import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from './../../components/Box';
import { fetchMoviesCast } from './../../Services/Api';
import { CastCard, CastList, CastName, CastChar } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchMoviesCast(movieId).then(setCast);
  }, [movieId]);
  if (!cast) {
    return null;
  }

  return (
    <Box as="section">
      <CastList>
        {cast.length === 0
          ? "Sorry, we don't have information about this cast"
          : cast.cast.map(({ name, character, profile_path }, index) => (
              <CastCard key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  width={180}
                  alt=""
                />
                <CastName>{name}</CastName>
                <CastChar>char: {character}</CastChar>
              </CastCard>
            ))}
      </CastList>
    </Box>
  );
};
export default Cast;


// import { useParams } from "react-router-dom";
// import { useEffect, useState } from 'react';
// import { fetchMovieCast } from "./../../apiService/apiService";
// import { ActorsList, ActorsItem, ActorName } from "./Cast.styled"; 
// import defaultImage from '../../images/imageFoto.png'

// export default function Cast() {
//   const [actors, setActors] = useState([]);
//   const { moviesId } = useParams();

//   useEffect(() => {
//         fetchMovieCast(moviesId).then(response => setActors([...response])).catch(error => console.log(error.message))
//   }, [moviesId])
  
//   return (
//     <ActorsList>
//       {actors.map(({id, profile_path: profilePath, name, character}) => 
//         <ActorsItem key={id}>
//           <img src={profilePath ? `https://image.tmdb.org/t/p/w200${profilePath}` : `${defaultImage}`} alt={name} width={200} height={300}/>
//           <ActorName>{name}</ActorName>
//           <p>{character}</p>
//         </ActorsItem>
//       )}
//    </ActorsList>
//   )
// }