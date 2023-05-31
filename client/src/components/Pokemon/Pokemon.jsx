import React from 'react'
import style from "./Pokemon.module.css"
const Pokemon = (props) => {
  console.log(props)
  return (
    <div className={style.pokemonContainer}>
      <div className={style.pokemonTitle}>
        <h1>{props.name}</h1>
      </div>
      <div className={style.pokemonDivisor}></div>
      <img className={style.pokemonImg} src={props.img} alt={props.name}/>
      <div className={style.pokemonInfo}>
        HP: {props.hp}
        <br></br>
        ATTACK: {props.attack}
      </div>
    </div>
  )
}

export default Pokemon