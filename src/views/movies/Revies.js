import axios from "axios";
import React, { Component } from "react";
const KEY = "b42fcc4cb047a9aa884c69051a0d1c53";

class Revies extends Component {
  state = {
    revies: []
  };
  componentDidMount() {
    const id = this.props.match.params.movieId;
    console.log(this.props, `revies`);
    axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`).then(({ data }) => {
      this.setState({
        revies: data.results
      });
      console.log(this.state);
    });
  }
  render() {
    return (
      <>
        <ul>
          {this.state.revies.length > 0 ? (
            this.state.revies.map(discript => {
              return (
                <li key={discript.id}>
                  <h2>Author:{discript.author}</h2>
                  <p>{discript.content}</p>
                </li>
              );
            })
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      </>
    );
  }
}

export default Revies;
