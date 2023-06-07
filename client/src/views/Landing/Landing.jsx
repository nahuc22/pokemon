import React from 'react'
import style from './Landing.module.css'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div className={style.container}>
      <Link to={"/home"}><button>Entrar</button></Link>
    </div>
  )
}

export default Landing