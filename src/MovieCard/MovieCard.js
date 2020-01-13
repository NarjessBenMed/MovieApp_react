import React from 'react'
import './MovieCard.css'

export default function MovieCard(props) {


    const Rating = (count) => {
        let stars = []
      if  (count <=5 ) 
      {
       for (let i = 0; i < 5; i++) {
            if(i < count) {
                stars.push(<span >★</span>)
            }
            else {
                stars.push(<span >☆</span>)
            }
        }
        return (
            <div className="movieRating">{stars}</div>
        )
      }
        else alert (" Error ! Rating > 5 ")
    }


    
    return (
        <div className="MovieCard">
        <span>{Rating(props.movie.rating)}</span> 
         <img  className="poster" src={props.movie.src} />
         <p>  {props.movie.name +"  " +props.movie.release_date}   </p>
    </div>
    )
}



