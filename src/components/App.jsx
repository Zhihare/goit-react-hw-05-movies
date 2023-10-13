// import Home from "pages/Home";
// import Movies from "pages/Movies";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
// import { MovieDetails } from "./MovieDetails";
import MovieCast from "./MovieCast";
import MovieReviews from "./MovieReviews";
import { Suspense, lazy } from "react";
import { Loader } from "./Loader";

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('components/MovieDetails'))


export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movie/:movieId" element={<MovieDetails />}>
            <Route path="/movie/:movieId/cast" element={<MovieCast />}></Route>
            <Route path="/movie/:movieId/reviews" element={<MovieReviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
