import React, { useState , useEffect} from 'react'
import style from "./Home.module.css"
import Container from '../../components/Container/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../redux/Actions'
const Home = () => {
  const dispatch = useDispatch()
  const allPokemons = useSelector((state) => state.allPokemons)
  console.log(allPokemons)
  const [state, setState] = useState({
  })
  
  
  useEffect (() => {
    dispatch(getPokemons())
  }, [])

  return (
    <div className={style.homeContainer}>
      {console.log(allPokemons)}
      <div>Home</div>
      <Container allPokemons={allPokemons}/>
    </div>
  )
}

export default Home