import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from './Spinner';
import { GlobalStyle } from '../GlobalStyle';

import { NavBar } from '../components/NavBar/NavBar';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SearchMovies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<SearchMovies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </div>
  );
};
