import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from './../../components/Box';
import { fetchMoviesReviews } from './../../Services/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);
  useEffect(() => {
    fetchMoviesReviews(movieId).then(setReview);
  }, [movieId]);
  if (!review) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="ul" display="flex" flexDirection="column" gridGap={15} p={0}>
        {review.length === 0
          ? "Sorry,there are no reviews for this movie"
          : review.results.map(({ author, content }, index) => (
              <li key={index}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
      </Box>
    </Box>
  );
};
export default Reviews;

