import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./NavBar.module.css"
import { getPokemonByName, getPokemonbyId, getPokemons} from "../../redux/Actions/index"
import { useDispatch } from 'react-redux'

const NavBar = ({searchString, filtered, setFiltered, setOrder}) => {

  const dispatch = useDispatch();
  const [input, setInput] = useState("")

  const handleChange = (event) => {
    setInput(event.target.value)
}

  const handleSubmit = (event) => {
    event.preventDefault()
    if(isNaN(input)) {
      setInput("");
      setFiltered(true);
      return dispatch(getPokemonByName(input))
    }
    dispatch(getPokemonbyId(input))
  }
  const reset = () => {
    dispatch(getPokemons())
    setFiltered(false)
    setOrder(false)
    }
  return (
    <div className={style.navContainer}>
      <div>
        <Link to={"/"}> <img className={style.logo} src="https://get.wallhere.com/photo/illustration-text-logo-Pok-mon-neon-sign-brand-number-font-signage-193746.jpg" alt="pokelogo"/> </Link>
      </div>
      <div className={style.linkContainer}>
        <button ><Link className={style.link} onClick={reset} to={"/home"}>Home</Link></button>
        <Link className={style.link} to={"/create"}>Create</Link>
        
      <form >
        <input className={style.input} onChange={handleChange}  type="text" placeholder="Search..."/>
        <button className={style.button} onClick={handleSubmit} type="submit" >Search</button>

      </form>
      </div>
    </div>
  )
}

export default NavBar