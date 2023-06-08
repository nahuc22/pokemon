import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from "./NavBar.module.css"
import { getPokemonByName, getPokemonbyId, getPokemons} from "../../redux/Actions/index"
import { useDispatch } from 'react-redux'

const NavBar = ({searchString, filtered, setCurrentPage , setFiltered, setOrder, setType}) => {

  const dispatch = useDispatch();
  const [input, setInput] = useState("")

  const handleChange = (event) => {
    setInput(event.target.value)
    setOrder(false)
    setFiltered(false)
    setType(false)
    setCurrentPage(1)
}

  const handleSubmit = (event) => {
    event.preventDefault()
    if(isNaN(input)) {
      setInput("");
      setFiltered(true);
      setOrder(false)
      setType(false)
     return  dispatch(getPokemonByName(input))
    } 
    dispatch(getPokemonbyId(input))
    setInput("")
    setFiltered(false)
    setOrder(false)
    setType(false)
    
  }
  const reset = () => {
    dispatch(getPokemons())
    setFiltered(false)
    setOrder(false)
    setType(false)
    setCurrentPage(1)
    }
  return (
    <div className={style.navContainer}>
      <div>
        <NavLink to={"/"}> <img className={style.logo} src="https://get.wallhere.com/photo/illustration-text-logo-Pok-mon-neon-sign-brand-number-font-signage-193746.jpg" alt="pokelogo"/> </NavLink>
      </div>
      <div className={style.divContainer}>
        <button className={style.button}>
          <NavLink className={style.linkHome} onClick={reset} to={"/home"}>Home</NavLink>
        </button>
        <button className={style.button}>
          <NavLink className={style.linkHome} to={"/create"}>Create</NavLink>
        </button>
      </div>
      <div>
        <input className={style.input} onChange={handleChange}  type="text" placeholder="Search..."/>
        <button className={style.button} onClick={handleSubmit} type="submit">Search</button>
      </div>
    </div>
  )
}

export default NavBar