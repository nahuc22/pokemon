import React from 'react'
import style from "./Home.module.css"
import Container from '../../components/Container/Container'

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div>Home</div>
      <Container/>
    </div>
  )
}

export default Home