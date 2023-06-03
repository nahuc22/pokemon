import React, { useState , useEffect} from 'react'
import style from "./Home.module.css"
import Container from '../../components/Container/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, filter, getPokemonByName , getPokemonbyId, getType} from '../../redux/Actions'
import NavBar from '../../components/NavBar/NavBar'
const Home = () => {
  const dispatch = useDispatch()
  const ITEMS_PER_PAGE = 4;
  const allPokemons = useSelector((state) => state.allPokemons)
  const pokemonsFiltered = useSelector((state) => state.pokemonsFiltered)
  const filters = useSelector((state) => state.filters)
  const [searchString, setSearchString] = useState("")
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsFiltered, setItemsFiltered] = useState([...pokemonsFiltered].splice(0, ITEMS_PER_PAGE))
  const [items, setItems] = useState([...allPokemons]?.splice(0, ITEMS_PER_PAGE))

  const handleChange = (event) => {
      event.preventDefault();
      setSearchString(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(isNaN(searchString)) return dispatch(getPokemonByName(searchString))
    dispatch(getPokemonbyId(searchString))
  }

  const nextPage = () => {
    if(filters){
      const next_page = currentPage + 1;
      const firstIndex = next_page * ITEMS_PER_PAGE;
      if(firstIndex>= allPokemons.length) return;
      setItemsFiltered([...pokemonsFiltered].splice(firstIndex, ITEMS_PER_PAGE))
      setCurrentPage(next_page)
      return;
    }
    const next_page = currentPage + 1;
    const firstIndex = next_page * ITEMS_PER_PAGE;
    if(firstIndex>= allPokemons.length) return;
    setItems([...allPokemons].splice(firstIndex, ITEMS_PER_PAGE))
    setCurrentPage(next_page)
  }
  const prevPage = () => {
    if(filters){
      const prev_page = currentPage - 1;
      const firstIndex = prev_page * ITEMS_PER_PAGE;
      if (prev_page < 0) return;
      setItemsFiltered([...pokemonsFiltered].splice(firstIndex, ITEMS_PER_PAGE))
      setCurrentPage(prev_page)
      return;
    }
    const prev_page = currentPage - 1;
    const firstIndex = prev_page * ITEMS_PER_PAGE;
    if(prev_page < 0) return;
    setItems([...allPokemons].splice(firstIndex, ITEMS_PER_PAGE))
    setCurrentPage(prev_page)
  }
  
  useEffect (() => {
    dispatch(getPokemons())
  }, [])

  const filterOrd = (event) => {
    dispatch(filter(event.target.value))
  }

  useEffect(() => {
    dispatch(getType())
  }, [])

  useEffect(() => {
    setItems([...allPokemons].splice(0, ITEMS_PER_PAGE))
  }, [allPokemons])

  useEffect(() => {
    setItemsFiltered([...pokemonsFiltered].splice(0, ITEMS_PER_PAGE))
  }, [pokemonsFiltered])
  
  return (
    <div>
      <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <div>
        <label>Ordenamiento por Nombre</label>
        
        <select onChange={filterOrd} name="" id="">
          <option defaultChecked value="0">-</option>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
      {filters?<Container  allPokemons={itemsFiltered}/>: <Container allPokemons={items}/>}
      <div>
          <button onClick={prevPage}>prev</button><button onClick={nextPage}>next</button>
        </div>
      </div>
    </div>
  )
}

export default Home