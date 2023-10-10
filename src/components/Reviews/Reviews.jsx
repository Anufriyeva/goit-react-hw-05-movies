import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../Service/Service';
import {
  ReviewsContainer,
  ReviewList,
  ReviewItem,
  ReviewAuthor,
  ReviewContent,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const reviewsData = await getMovieReviews(movieId);
        setReviews(reviewsData.results);
      } catch (error) {
        console.error('Error occurred while fetching reviews:', error);
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <ReviewsContainer>
      <h2>Reviews</h2>
      <ReviewList>
        {reviews.map((review) => (
          <ReviewItem key={review.id}>
            <ReviewAuthor>{review.author}</ReviewAuthor>
            <ReviewContent>{review.content}</ReviewContent>
          </ReviewItem>
        ))}
      </ReviewList>
    </ReviewsContainer>
  );
};

export default Reviews;