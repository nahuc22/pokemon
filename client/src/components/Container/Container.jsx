import React from 'react'
import Pokemon from '../Pokemon/Pokemon'
import style from "./Container.module.css"
const Container = () => {
  return (
    <div className={style.container}>
      <Pokemon name={"pikachu"} hp={"100"} attack={"420"}/>
      <Pokemon name={"charizard"} hp={"100"} attack={"420"}/>
    </div>
  )
}

export default Container