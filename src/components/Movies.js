import React from 'react'
import { movies } from '../data'

let movieList = movies.map((movie, index) => {
  return(
    <div key={index}>
      <h4>Name: {movie.title}</h4>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map((genre)=>{
          return(
            <li>{genre}</li>
          )
        })}
      </ul>
    </div>
  )
})

const Movies = () => {
    return (
        <div>
            <h1>Movies Page</h1>
            {movieList}
        </div>
    )
}

module.exports = Movies
