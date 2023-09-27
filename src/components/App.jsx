import { Routes, Route, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Layout } from 'components/Layout/Layout';
import Loader from 'components/Loader/Loader'; // Додайте компонент лоадера, якщо не маєте його

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const NotFoundPage = lazy(() => import('pages/NotFound/NotFound'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />}>
            <Route index element={<Outlet />} /> {/* Використовуйте Outlet для відображення дочірніх маршрутів */}
            <Route path="Cast" element={<Cast />} />
            <Route path="Reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
