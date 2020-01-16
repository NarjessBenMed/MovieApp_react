import React, { Component } from "react";
import MovieList from "./MovieList/MovieList.js";
import "./App.css";
import AddMovie from "./AddMovie/AddMovie.js";
import Search from "./SearchBar/Search.js";
import RatingSearch from "./Search_by_Rating/RatingSearch";
import HocLoader from './HocLoader/HocLoader.js'



 export default  class App extends Component {
  
  state = {
    filters: "",
    loading:true,
    rate: 0,
    ListMovie: [
      {
        name: "Miraculous",
        src:
          "https://media.picwictoys.com/images/products/1723291/1723291_1.png",
        rating: 2,
        release_date: "2010"
      },

      {
        name: "Masha",
        src:
          "https://i.pinimg.com/originals/c0/a8/8f/c0a88ff222b80920a068fe242d427abe.jpg",
        rating: 3,
        release_date: "2014"
      },

      {
        name: "Pyjamasque",
        src:
          "https://www.groupemodus.com/wp-content/uploads/2018/10/435_Pyjamasques_C1.jpg",
        rating: 1,
        release_date: "2018"
      },

      {
        name: "La garde de rois lion",
        src:
          "https://images-na.ssl-images-amazon.com/images/I/51jWA-DMveL._SX258_BO1,204,203,200_.jpg",
        rating: 1,
        release_date: "2018"
      },

      {
        name: "Nancy Flancy Clancy",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSj9Sb_VCQPeY2zpyU_yZ0JachcCYP79ligO62MGh00w4bWJM&s",
        rating: 1,
        release_date: "2018"
      },

      {
        name: "Princesse sofia",
        src: "https://www.chroniquedisney.fr/imgTele/hs/2017-sofia-iles-01.jpg",
        rating: 4,
        release_date: "2018"
      },

      {
        name: "Mickey et ses amis",
        src:
          "https://fusion.molotov.tv/arts/m2/446x588/Ch8SHQoU8lQMEw2lo7QwW8wFLnRJ7nNaWOwSA2pwZxgBCh8IARIbChQxgQpChqM8tTAyjq8H0vK29njHtBIDcG5n/jpg",
        rating: 2,
        release_date: "2018"
      },

      {
        name: "Vampirina",
        src: " https://pictures.abebooks.com/isbn/9788416931682-us.jpg",
        rating: 2,
        release_date: "2018"
      },

      {
        name: "Maman j'ai raté l'avion",
        src:
          "https://www.ecranlarge.com/media/cache/160x213/uploads/image/001/123/rsw3rjbbipiejpatztc0jbczfo6-495.jpg",
        rating: 3,
        release_date: "2018"
      },
      {
        name: "Max le chien geant",
        src:
          "http://www.blurayenfrancais.com/images/illustrations/concoursmaxlegeant.jpg",
        rating: 1,
        release_date: "2018"
      }
    ],

    show: false
  };
componentDidMount=()=>{
  setTimeout(()=>{this.setState({loading:false} ) },2000)
}
  handleAdd = movie => {
    this.setState({
      ListMovie: [...this.state.ListMovie, movie]
    });
  };

  hideModal = () => {
    this.setState({
      show: false
    });
  };

  showModal = () => {
    this.setState({
      show: true
    });
  };

  HandlehangeSearch = serached => {
    this.setState({ filters: serached });
  };

  HandleRatingSearch = rates => {
    this.setState({ rate: rates });
  };

 
  render() {
    return (
      <div>
        <div className="search">
          <Search search={this.HandlehangeSearch} />
          <RatingSearch
            search={this.HandleRatingSearch}
            rate={this.state.rate}
          />
        </div>
        <MovieList List={this.state} loading={this.state.loading} />
        <button className="addButt" onClick={this.showModal}>  Add new movie
       
        </button>
        <AddMovie
          show={this.state.show}
          addM={this.handleAdd}
          hide={this.hideModal}
        />
      </div>
    );
  }
}

