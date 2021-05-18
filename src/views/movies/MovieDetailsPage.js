import axios from "axios";
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Cast from "./Cast";
import Revies from "./Revies";
// import { NavLink } from 'react-router-dom';

const KEY = "b42fcc4cb047a9aa884c69051a0d1c53";

class MovieDetailsPage extends Component {
  state = {
    films: null,
    form: null
  };
  async componentDidMount() {
    const id = this.props.match.params.movieId;
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`);
    // .then(response=>{
    //   console.log(response.data);

    this.setState({
      films: data,
      form: this.props.location.state
    });
    console.log(this.props.location);
  }
  onGobake = () => {
    if (this.state.form?.search) {
      this.props.history.push({
        pathname: this.state.form.from,
        search: `query=${this.state.form.search}`
      });
    } else {
      this.props.history.push("/");
    }
  };

  render() {
    const { films } = this.state;
    console.log(films);
    return (
      <>
        <button type="button" onClick={this.onGobake}>
          Go bake
        </button>
        {films && (
          <>
            MovieDetailsPage
            <div>
              <img src={`https://image.tmdb.org/t/p/w500${films.poster_path}`} alt="e" />
              <h2>{films.title}</h2>
              <p />
              <h2>Owervie</h2>
              <p>{films.overview}</p>
              <h2>Genres</h2>
              <p>
                {films.genres.map(film => (
                  <li>{film.name} </li>
                ))}
              </p>
            </div>
          </>
        )}
        <Link to={`${this.props.match.url}/cast`}>cast</Link>
        <Link to={`${this.props.match.url}/revies`}>revies</Link>

        <Switch>
          <Route path={`${this.props.match.path}/cast`} component={Cast} />
          <Route path={`${this.props.match.path}/revies`} component={Revies} />

          {/* <Route path="/movies/:movieId" component={MovieDetailsPage} /> */}
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
