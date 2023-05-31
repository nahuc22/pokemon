import React from 'react'
import Pokemon from '../Pokemon/Pokemon'
import style from "./Container.module.css"
const Container = ({allPokemons}) => {
  console.log(allPokemons)
  return (
    <div className={style.container}>
      {allPokemons?.map((pokemon) => (<Pokemon 
      key={pokemon.id}
      id={pokemon.id}
      img={pokemon.img} 
      hp={pokemon.life}
      attack={pokemon.attack}
      name={pokemon.name}
      Types={pokemon.type && pokemon.type.join(", ")} 
      />))}
    </div>
  )
}

export default Container