import axios from "axios";
import React, { Component } from "react";
const KEY = "b42fcc4cb047a9aa884c69051a0d1c53";

class Cast extends Component {
  state = {
    cast: null
  };
  componentDidMount() {
    const id = this.props.match.params.movieId;
    console.log(this.props, `cast`);
    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`).then(({ data }) => {
      this.setState({
        cast: data.cast
      });
      console.log(this.state.cast);
    });
  }
  render() {
    const { cast } = this.state;

    if (!cast) {
      return null;
    }
    console.log(cast);
    return (
      <>
        <ul>
          {cast.map(actor => {
            return (
              <li key={actor.id}>
                <img src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt={`Photo ${actor.name}: this actor`} />

                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;
