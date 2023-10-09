import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../Service/Service';
import { HomeContainer, MovieCard, MovieImage, MovieList } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies.results);
      } catch (error) {
        console.error('Error occurred while loading movies:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <HomeContainer>
      <h1>Trending Movies</h1>
      <MovieList>
        {movies.map((movie) => (
          <MovieCard key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
            </Link>
          </MovieCard>
        ))}
      </MovieList>
    </HomeContainer>
  );
};

export default Home;