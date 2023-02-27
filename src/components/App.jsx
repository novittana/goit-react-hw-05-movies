import { lazy } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import HeaderMenu  from './HeaderMenu';
import { Container } from './App.styled';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));


export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HeaderMenu />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Container>
  );
};