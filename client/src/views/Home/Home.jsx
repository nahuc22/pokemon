import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import Container from "../../components/Container/Container";
import Page from "../../components/Page/Page";
import Filters from "../../components/Filters/Filters"
import Sort from "../../components/Sort/Sort"
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  getTypes
} from "../../redux/Actions";


const Home = () => {
  const dispatch = useDispatch();

  
  const types = useSelector((state) => state.types);
  const allPokemons = useSelector((state) => state.pokemons);
  
  const [order, setOrder] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(10)  
  const indexOfLastPokemon = currentPage * pokemonsPerPage
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
  
  useEffect(()=>{
    dispatch(getPokemons())
    dispatch(getTypes())
  }, [dispatch])

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)  
  }
  const handleRefresh = () => {
    dispatch(getPokemons())
    setCurrentPage(1)
    setPokemonsPerPage(10)
  }
  
  return (
    <div className={style.papiContenedor}>
        <div className={style.selectContainer}>
        <Filters types={types} setOrder={setOrder} setCurrentPage={setCurrentPage}/>
        <button className={style.button}onClick={handleRefresh}>Reset</button>
        <Sort setOrder={setOrder} setCurrentPage={setCurrentPage}/>
        </div>
        <div className={style.divContainer}>
        <Container currentPokemons={currentPokemons}/>
        <Page pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginado={paginado}/>
        </div> 
      </div>
  )
};
export default Home;
