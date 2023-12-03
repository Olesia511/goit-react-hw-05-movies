import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  params: { language: 'en-US', include_adult: 'false' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzU3NmRiNDgzNWY0OGQ0NzRjYmJlMWI2NzljYzkxYiIsInN1YiI6IjY1NjdhNmVmMDIxY2VlMDBhZGE3NjJhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZIko6K1dE3w2QDn32RkQejmfYQKYjH36wuVYS4ZVQHw',
  },
};

// ===========    список найпопулярніших фільмів на сьогодні

export const fetchTrendingMovies = async () => {
  const resp = await axios.get(`trending/all/day`, options);
  return resp.data;
};

// ===========    запит повної інформації про фільм по id

export const fetchMovieDetails = async id => {
  const resp = await axios.get(`/movie/${id}`, options);
  return resp.data;
};

// ===========    запит інформації про акторський склад фільму

export const fetchMovieCast = async id => {
  const resp = await axios.get(`/movie/${id}/credits`, options);
  return resp.data;
};

// ===========    запит оглядів фільму

export const fetchMovieReviews = async id => {
  const resp = await axios.get(`/movie/${id}/reviews`, options);
  return resp.data;
};

// ===========    пошук фільму за ключовим словом

export const fetchMovieByName = async value => {
  const resp = await axios.get(`/search/movie?query=${value} `, options);
  return resp.data;
};
