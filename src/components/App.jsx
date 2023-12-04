import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
