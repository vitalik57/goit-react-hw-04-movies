import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    query: ""
  };
  handlChange = e => {
    this.setState({
      query: e.currentTarget.value
    });
  };
  handlSubmite = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({
      query: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handlSubmite}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          onChange={this.handlChange}
          value={this.state.query}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}

export default SearchForm;
