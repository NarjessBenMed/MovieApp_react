import React, { Component } from "react";
import "./AddMovie.css";
import MovieList from "../MovieList/MovieList";
import MovieCard from "../MovieCard/MovieCard";

export default class AddMovie extends Component {
  state = {
    name: "",
    src: "",
    rating: "",
    release_date: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.props.show) {
      return (
        <div className="AddMovie">
          <input
            type="text"
            name="rating"
            onChange={this.handleChange}
            value={this.state.rating}
          />

          <input
            type="text"
            name="src"
            onChange={this.handleChange}
            value={this.state.src}
          />

          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <input
            type="text"
            name="release_date"
            onChange={this.handleChange}
            value={this.state.release_date}
          />

          <button
            onClick={() => {
              this.props.addM({
                name: this.state.name,
                src: this.state.src,
                rating: this.state.rating,
                release_date: this.state.release_date
              });
              this.setState({
                name: "",
                src: "",
                rating: "",
                release_date: ""
              });
              this.props.hide();
            }}
          >
            ADD
          </button>
        </div>
      );
    } else return null;
  }
}
