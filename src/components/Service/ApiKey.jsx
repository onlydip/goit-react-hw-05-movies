import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  language: 'en-US',
  params: {
    api_key: '3d1fae92642db152fb96a11121415088',
  },
});

export async function getPopularMovies() {
  const response = await instance.get(`/trending/movie/day`);
  return response.data.results;
}

export async function getMoviesByName(query) {
  const response = await instance.get(`/search/movie`, {
    params: {
      query,
    },
  });
  return response.data.results;
}

export async function getMoviesById(id) {
  const response = await instance.get(`/movie/${id}`);
  return response.data;
}

export function getMovieCredits(id) {
  const response = instance.get(`/movie/${id}/credits`);
  return response;
}

export function getMovieReviews(id) {
  const response = instance.get(`/movie/${id}/reviews`);
  return response;
}