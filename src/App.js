import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Homepage from "./views/Homepage";
import Cast from "./views/movies/Cast";
import MovieDetailsPage from "./views/movies/MovieDetailsPage";
import MoviesPage from "./views/movies/MoviesPage";
import Revies from "./views/movies/Revies";
import NotFound from "./views/NotFound";

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
