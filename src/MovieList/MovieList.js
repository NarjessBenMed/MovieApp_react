import React from "react";
import "./MovieList.css";
import HocLoader from '../HocLoader/HocLoader.js'
import MovieCard from "../MovieCard/MovieCard.js";


 function MovieList(props) {





  return (

    <div className="MovieList">
      {props.List.ListMovie.filter(el=>(el.name.toUpperCase().includes
           (props.List.filters.toUpperCase())&& (el.rating>= props.List.rate))).map((el, i) => (
        <MovieCard movie={el} key={i} />
      ))}
    </div>
  );
}

  export  default  HocLoader(MovieList)
