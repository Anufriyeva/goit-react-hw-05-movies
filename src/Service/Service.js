import axios from 'axios';

const API_KEY = '6a36e301885f962349cee6c965980664';
const BASE_URL = 'https://api.themoviedb.org/3';


async function fetchData(url, params = {}) {
  try {
    const response = await axios.get(url, {
      params: {
        ...params,
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні даних з API:', error);
    throw error;
  }
}

export async function getTrendingMovies() {
  const url = `${BASE_URL}/trending/movie/day`;
  return fetchData(url);
}

export async function searchMovies(query) {
  const url = `${BASE_URL}/search/movie`;
  const params = {
    query,
  };
  return fetchData(url, params);
}

export async function getMovieDetails(movieId) {
  const url = `${BASE_URL}/movie/${movieId}`;
  return fetchData(url);
}

export async function getMovieCredits(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/credits`;
  return fetchData(url);
}

export async function getMovieReviews(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews`;
  return fetchData(url);
}