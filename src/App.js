import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
// // import Homepage from "./views/Homepage";
// import MovieDetailsPage from "./views/movies/MovieDetailsPage";
// import MoviesPage from "./views/movies/MoviesPage";
import NotFound from "./views/NotFound";
const Homepage = lazy(() => import("./views/Homepage"));
const MovieDetailsPage = lazy(() => import("./views/movies/MovieDetailsPage"));
const MoviesPage = lazy(() => import("./views/movies/MoviesPage"));

function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/movies">MoviesPage</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFound} />
      </Switch>
      {/* <Revies /> */}
    </>
  );
}

export default App;
