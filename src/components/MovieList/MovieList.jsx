import { useLocation } from "react-router-dom";
import { List, Card, TitleLink, TrendDesc, Title } from "./MovieList.styled";

export const MovieList = ({ films }) => {
  const location = useLocation();

  return (
         <List>
        {films.map(({ title, poster_path, release_date, id }, index) => (
          <Card key={index}>
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
          </Card>
        ))}
      </List>
  );
};

// export default MovieList;