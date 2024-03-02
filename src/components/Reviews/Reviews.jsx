import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from './../../components/Box';
import { fetchMoviesReviews } from './../../Services/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
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
          ? "Sorry, we don't have reviews for this movie"
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


// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { fetchMovieReviews } from './../../apiService/apiService';
// import {ReviewsList, AuthorName} from './Reviews.styled'

// export default function Reviews() {
//   const [reviews, setReviews] = useState([]);
//   const { moviesId } = useParams();

//   useEffect(() => {
//     fetchMovieReviews(moviesId)
//       .then(response => setReviews([...response]))
//       .catch(error => console.log(error.message));
//   }, [moviesId]);

//   return (
//     <ReviewsList>
//       {reviews.map(({ id, author, content }) => (
//         <li key={id}>
//           <AuthorName>{author}</AuthorName>
//           <p>{content}</p>
//         </li>
//       ))}
//     </ReviewsList>
//   );
// }