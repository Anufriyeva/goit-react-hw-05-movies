import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { searchMovies } from '../../Service/Service';
import { MoviesContainer, SearchForm, MovieList, MovieCard, MovieImage } from './Movies.styled';


const Movies = () => {
  const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const queryValue = new URLSearchParams(location.search).get('query');

    useEffect(() => {
    if (queryValue) {
      setQuery(queryValue);
    }
  }, [queryValue]);

    useEffect(() => {
    async function fetchData() {
      if (query.trim() !== '') {
        try {
          const searchResults = await searchMovies(query);
          setMovies(searchResults.results);
        } catch (error) {
          console.error('Error occurred while loading movies:', error);
        }
      } else {
        setMovies([]);
      }
    }

    fetchData();
  }, [query]);
    
    const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      navigate(`/movies?query=${query}`);
    }
  };

  return (
    <MoviesContainer>
      <h1>Millions of movies, TV shows and people to discover. Explore now.</h1>
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie... Pulp Fiction for example"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Let's find</button>
      </SearchForm>
      <MovieList>
        {movies.map((movie) => (
            <MovieCard key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                    <MovieImage
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <h2>{movie.title}</h2>
                </Link>
            </MovieCard>
        ))}
      </MovieList>
    </MoviesContainer>
  );
};

export default Movies;