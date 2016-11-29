import React from 'react'
import { directors } from '../data'

let directorList = directors.map((director, index) => {
  return(
    <div key={index}>
      <h4>Name: {director.name}</h4>
      <p>Movies:</p>
      <ul>
        {director.movies.map((movie)=>{
          return(
            <li>{movie}</li>
          )
        })}
      </ul>
    </div>
  )
})

const Directors = () => {
    return (
        <div>
            <h1>Directors Page</h1>
            {directorList}
        </div>
    )
}

module.exports = Directors
