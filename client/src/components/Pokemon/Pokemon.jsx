import React from 'react'
import style from "./Pokemon.module.css"
import {Link} from "react-router-dom"
const Pokemon = (pokemon) => {
  return (
    <div className={style.pokemonContainer}> 
      <div className={style.pokemonTitle}>
        <h1>{pokemon.name}</h1>
      </div>
      
      <div className={style.pokemonDivisor}></div>
      <Link to={`/pokemon/${pokemon.id}`}>
      <img className={style.pokemonImg} src={pokemon.img} alt={pokemon.name}/>
      </Link>
      <div className={style.pokemonInfo}>
          Attack: {pokemon.attack}
        <br></br>
        Types: {pokemon.types}       
      </div>

    </div>
  )
}

export default Pokemon