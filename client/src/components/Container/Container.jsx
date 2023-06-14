import React from 'react'
import Pokemon from '../Pokemon/Pokemon'
import style from "./Container.module.css"
const Container = ({currentPokemons}) => {
  return ( 
    <div className={style.container}>
      {currentPokemons?.map((pokemon, index) => (< Pokemon
      key = {index}
      id={pokemon.id}
      img={pokemon.img} 
      hp={pokemon.life}
      attack={pokemon.attack}
      name={pokemon.name}
      types={pokemon.Types && pokemon.Types.join(", ")}
     />))}
    </div>
  )
}

export default Container