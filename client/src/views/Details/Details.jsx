import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import style from './Details.module.css'

const Details = () => {
  const {id} = useParams()
  const allPokemons = useSelector((state) => state.allPokemons)
  const pokemon = allPokemons.filter((pokemon) => pokemon.id == id)
  console.log(pokemon)
  return (
     <div >
      <div >
        <h1>{pokemon && pokemon[0].name}</h1>
      </div>
      <div className={style.img}></div>
      <img src={pokemon[0].img} alt={pokemon[0].name}/>
      <div >
        HP: {pokemon[0].life}
        <br></br> 
        ATTACK: {pokemon[0].attack}
        <br></br> 
        Types: {pokemon[0].Types && pokemon[0].Types.join(", ")}       
      </div>

    </div>
  )
}

export default Details