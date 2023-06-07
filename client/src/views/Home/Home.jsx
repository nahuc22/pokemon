import React, { useState , useEffect} from 'react'
import style from "./Home.module.css"
import Container from '../../components/Container/Container'
import Page from '../../components/Page/Page'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, filter, getPokemonByName , getPokemonbyId, getType} from '../../redux/Actions'
import NavBar from '../../components/NavBar/NavBar'
const Home = () => {
  const dispatch = useDispatch()
  const allPokemons = useSelector((state) => state.allPokemons)
  const pokemonsFiltered = useSelector((state) => state.pokemonsFiltered)
  const pokemonsOrder = useSelector((state) => state.pokemonsOrder)
  const types = useSelector((state) => state.types)
  const filters = useSelector((state) => state.filters)

  const [order, setOrder] = useState(false)
  const [searchString, setSearchString] = useState("")
  const [currentPage, setCurrentPage] = useState(0)
  const [pokemonPage, setPokemonPage] = useState(5)
  const [selectedType, setSelectedType] = useState('');
  const [filtered, setFiltered] = useState(filters)

  const totalPokemons = allPokemons && allPokemons.length !== 0 ? allPokemons.length : 0  
  const lastIndex = currentPage * pokemonPage;
  const firstIndex = lastIndex - pokemonPage;

  const handleChange = (event) => {
      setSearchString(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(isNaN(searchString)) return dispatch(getPokemonByName(searchString))
    dispatch(getPokemonbyId(searchString))
  }

  const reset = () => {
    dispatch(getPokemons())
    setSearchString("")
  }
  
  useEffect (() => {
    if(allPokemons.length === 0){
      dispatch(getPokemons())
    }
    dispatch(getType())
    setCurrentPage(1) 
    setFiltered(false)
  }, [])

  const filterOrd = (event) => {
    if(event.target.value == "0"){
      dispatch(getPokemons())
      setFiltered(false)
      setOrder(false)
      setCurrentPage(1)
    }else{
      dispatch(filter(event.target.value))
      setFiltered(false)
      setOrder(true)
      setCurrentPage(1)
    }
  }

  return (
    <div >
      <div >
      <NavBar setOrder={setOrder} searchString={searchString} onChange={handleChange} filtered={filtered} setFiltered={setFiltered}/>
      <div className={style.container}>
        {/* <label className={style.label}>Ordenamiento por Nombre</label> */}
        
        <select className={style.select} onChange={filterOrd} name="" id="">
          <option defaultChecked value="0">-</option>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>

          <h1 className={style.h1}>Tipos de Pokémon</h1>
          <select value={selectedType} onChange={getType}>
            <option value={selectedType}>Todos</option>
            {types.map((type,index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
          {/* <ul>
        {types
        .filter((type) => selectedType === '' || selectedType === type)
        .map((type) => (

            <ul>
              {pokemonsFiltered
                .filter((pokemon) => pokemon.type === type)
                .map((pokemon) => (
                  <Container key={pokemon.id} pokemon={pokemon} />
                ))}
                </ul>
          
        ))}
      </ul> */}

      {filtered
      ? <Container allPokemons={pokemonsFiltered} lastIndex={lastIndex} firstIndex = {firstIndex}/>
      : order? <Container allPokemons={pokemonsOrder} lastIndex={lastIndex} firstIndex={firstIndex}/> 
      : <Container allPokemons={allPokemons} lastIndex={lastIndex} firstIndex={firstIndex}/>
      }
      <Page 
      order={order} 
      setOrder={setOrder} 
      filtered={filtered} 
      pokemonsFiltered={pokemonsFiltered}
      currentPage={currentPage} 
      pokemonPage={pokemonPage} 
      totalPokemons={totalPokemons} 
      setCurrentPage={setCurrentPage}/>
      </div>
      </div>
    </div>
  )
}

export default Home