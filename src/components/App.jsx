import Home from "pages/Home";
import Movies from "pages/Movies";
import { Link, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { MovieDetails } from "./MovieDetails";
import MovieCast from "./MovieCast";
import MovieReviews from "./MovieReviews";


export const App = () => {
  return (
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
  );
};
