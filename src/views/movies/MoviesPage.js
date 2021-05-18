import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
// console.log(data.results)
const KEY = "b42fcc4cb047a9aa884c69051a0d1c53";
class MoviesPage extends Component {
  state = {
    movies: [],
    search: ""
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    if (query.get(`query`)) {
      this.onChangeQuery(query.get(`query`));
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      const query = new URLSearchParams(this.props.location.search);

      this.onChangeQuery(query.get(`query`));
    }
  }

  onChangeQuery = query => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(({ data }) => {
        this.setState({
          movies: data.results
        });
      });
  };
  handleSuubmit = query => {
    this.props.history.push({
      search: `query=${query}`
    });
    this.setState({
      search: query
    });
  };
  render() {
    console.log(this.props.location);
    return (
      <>
        <div>
          <SearchForm onSubmit={this.handleSuubmit} />
          <ul>
            {this.state.movies.map(film => (
              <li key={film.id}>
                <Link
                  to={{
                    pathname: `/movies/${film.id}`,
                    state: {
                      from: this.props.location.pathname,
                      search: this.state.search
                    }
                  }}
                >
                  {film.original_name || film.name || film.original_title || film.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default MoviesPage;
