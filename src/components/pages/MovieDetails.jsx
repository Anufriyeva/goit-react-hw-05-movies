import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { getMovieDetails } from '../../Service/Service';
import { MovieDetailsContainer, MovieInfo, PosterImage, CastButton, ReviewsButton, BackButton } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movieData, setMovieData] = useState(null);
  const searchQuery = new URLSearchParams(location.search).get('query');
  const backLink = location.state?.from ?? searchQuery ? `/movies?query=${searchQuery}` : '/movies';

  useEffect(() => {
  async function fetchData() {
    try {
      const data = await getMovieDetails(movieId);
      setMovieData(data);
    } catch (error) {
      console.error('Error occurred while fetching movie details:', error);
    }
  }

  fetchData();
  }, [movieId]);

  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <MovieDetailsContainer>
      
        <BackButton onClick={() => navigate(backLink)}>Back</BackButton>
      
      {movieData && (
        <>
          <h1>{movieData.title}</h1>
          <MovieInfo>
            <div>
              <PosterImage
                src={
                  movieData.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                    : defaultImg
                }
                width={250}
                alt="poster"
              />
            </div>
            <div>
              <p>{movieData.overview}</p>
              <p>Release Date: {movieData.release_date}</p>
              <p>Vote Average: {movieData.vote_average}</p>
              <p>Vote Count: {movieData.vote_count}</p>
              <p>Runtime: {movieData.runtime} minutes</p>
            </div>
          </MovieInfo>
          <Link to={`/movies/${movieId}/cast`}>
            <CastButton>Cast</CastButton>
          </Link>
          <Link to={`/movies/${movieId}/reviews`}>
            <ReviewsButton>Reviews</ReviewsButton>
          </Link>
          {/* <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews movieId={movieId} />} />
          </Routes> */}
        </>
      )}
    </MovieDetailsContainer>
  );
};

export default MovieDetails;