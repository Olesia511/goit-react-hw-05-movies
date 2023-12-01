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

// ============== запит інформації про акторський склад фільму

// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// 'https://api.themoviedb.org/3/ movie/268/credits ?language=en-US'
// const query = `/movie/ 268/ credits`  ;

// ======================        запит оглядів фільму
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
// 'https://api.themoviedb.org/3  /movie/268/reviews ?language=en-US  &page=1'
// const query = `/movie/ 268 / reviews     ?page=1`;

//  ===============    пошук фільму за ключовим словом

// https://api.themoviedb.org/3/search/movie?api_key=5c576db4835f48d474cbbe1b679cc91b&query=batman

export const fetchMovieByName = async value => {
  const resp = await axios.get(`/search/movie?query=${value} `, options);
  return resp.data;
};
