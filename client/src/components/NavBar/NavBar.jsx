import React from 'react'
import { Link } from 'react-router-dom'
import style from "./NavBar.module.css"

const NavBar = ({handleChange, handleSubmit}) => {
  return (
    <div className={style.navContainer}>
      <div>
        <Link to={"/"}> <img className={style.logo} src="https://get.wallhere.com/photo/illustration-text-logo-Pok-mon-neon-sign-brand-number-font-signage-193746.jpg" alt="pokelogo"/> </Link>
      </div>
      <div className={style.linkContainer}>
        <Link className={style.link} to={"/home"}>Home</Link>
        <Link className={style.link} to={"/create"}>Create</Link>

      <form onChange={(e) => handleChange(e)}>
        <input className={style.input} type="text" placeholder="Search..."/>
        <button className={style.button} type="submit" onClick={handleSubmit}>Search</button>

      </form>
      </div>
    </div>
  )
}

export default NavBar