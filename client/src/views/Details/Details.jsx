import React from 'react'
import { useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import style from './Details.module.css'

const Details = () => {
  const { id } = useParams()
  const allPokemons = useSelector((state) => state.allPokemons)
  const pokemon = allPokemons.filter((pokemon) => pokemon.id == id)
  return (
    <div className={style.container}>
      <div class={style.form}>
        <div>
          <h1 class={style.title}>{pokemon && pokemon[0].name}</h1>
          <p className={style.p}>ID: {pokemon[0].id}</p>
          <p className={style.p}>HP: {pokemon[0].life}</p>
          <p className={style.p}>ATTACK: {pokemon[0].attack}</p>
          <p className={style.p}>DEFENSE: {pokemon[0].defense}</p>
          <p className={style.p}>SPEED: {pokemon[0].speed}</p>
          <p className={style.p}>HEIGTH: {pokemon[0].height}</p>
          <p className={style.p}>WEIGTH: {pokemon[0].weight}</p>
          <p className={style.p}>Types: {pokemon[0].Types && pokemon[0].Types.join(", ")}</p>
        </div>
        <div >
          <img className={style.img} src={pokemon[0].img} alt={pokemon[0].name} />
        </div>
      </div>
    </div>
  )
}

export default Details