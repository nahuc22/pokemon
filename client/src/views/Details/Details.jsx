import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import style from './Details.module.css'

const Details = () => {
  const {id} = useParams()
  const allPokemons = useSelector((state) => state.allPokemons)
  const pokemon = allPokemons.filter((pokemon) => pokemon.id == id)
  return (
     <div className={style.container}>
      <form class={style.form}>
        <h1 class={style.h1}>{pokemon && pokemon[0].name}</h1>
      
        <img className={style.img} src={pokemon[0].img} alt={pokemon[0].name}/>

        <label className={style.label}>HP: {pokemon[0].life}</label>
        
        <label className={style.label}>ATTACK: {pokemon[0].attack}</label>
   
        <label className={style.label}>Types: {pokemon[0].Types && pokemon[0].Types.join(", ")}</label>
      </form>

    </div>
  )
}

export default Details