import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  state = {
    films: []
  };
  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=b42fcc4cb047a9aa884c69051a0d1c53`).then(response => {
      console.log(response);
      this.setState({
        films: response.data.results
      });
    });
  }

  render() {
    console.log(this.state.films);
    console.log(this.props.match);
    return (
      <>
        <ul>
          {this.state.films.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.title || film.name}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Homepage;
