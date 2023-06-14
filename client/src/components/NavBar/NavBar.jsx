import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import style from "./NavBar.module.css"
import {getPokemons} from "../../redux/Actions/index"
import { useDispatch } from 'react-redux'
import  SearchBar  from '../SearchBar/SearchBar'

const NavBar = () => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getPokemons())
  }
  return (
    <div className={style.navContainer}>
      <div>
        <Link to={"/"}> <img className={style.logo} src="https://get.wallhere.com/photo/illustration-text-logo-Pok-mon-neon-sign-brand-number-font-signage-193746.jpg" alt="pokelogo" /> </Link>
      </div>
      <div className={style.divContainer}>
        <button className={style.button}>
          <NavLink className={style.linkHome} onClick={handleClick} to={"/home"}>Home</NavLink>
        </button>
        <button className={style.button}>
          <NavLink className={style.linkHome} to={"/create"}>Create</NavLink>
        </button>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  )
}

export default NavBar