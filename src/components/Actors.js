import React from 'react'
import { actors } from '../data'

let actorList = actors.map((actor, index) => {
  return(
    <div key={index}>
      <h4>Name: {actor.name}</h4>
      <p>Movies:</p>
      <ul>
        {actor.movies.map((movie)=>{
          return(
            <li>{movie}</li>
          )
        })}
      </ul>
    </div>
  )
})

const Actors = () => {
    return (
      <div>
        <h1>Actors Page</h1>
        {actorList}
      </div>
    )
}

module.exports = Actors
