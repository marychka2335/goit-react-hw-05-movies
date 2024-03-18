import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from './../../components/Box';
import { fetchMoviesCast } from './../../Services/Api';
import { CastCard, CastList, CastName, CastChar } from './Cast.styled';
import { defaultImg } from './../../Services/Api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
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
          ? <p>Sorry, there in no any information about this cast</p>
          : cast.cast.map(({ name, character, profile_path }, index) => (
              <CastCard key={index}>
              <img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : `${defaultImg}`} width={180} alt="poster" />
              
                <CastName>{name}</CastName>
                <CastChar>char: {character}</CastChar>
              </CastCard>
            ))}
      </CastList>
    </Box>
  );
};
export default Cast;
