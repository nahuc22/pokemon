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
  const [pokemonsPerPage, setPokemonsPerPage] = useState(8)  
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
    setPokemonsPerPage(8)
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
  // const handleChange = (event) => {
  //   setSearchString(event.target.value);
  // };

  // const getTypeFilter = (event) => {
  //   if (event.target.value !== "select") {
  //     dispatch(getPokemonTypeFilters(event.target.value));
  //     setType(true);
  //     setOrder(false);
  //     setFiltered(false)
  //     setCurrentPage(1)
  //   } else {
  //     setType(false);
  //     setOrder(false);
  //     setFiltered(false);
  //     setCurrentPage(1)
  //   }
  // };

  // useEffect(() => {
  //   if (allPokemons.length === 0) {
  //     dispatch(getPokemons());
  //   }
  //   dispatch(getType());
  //   setCurrentPage(1);
  //   setFiltered(false);
  // }, []);

  // const filterOrd = (event) => {
  //   if (event.target.value == "0") {
  //     dispatch(getPokemons());
  //     setFiltered(false);
  //     setOrder(false);
  //     setCurrentPage(1);
  //   } else {
  //     dispatch(filter(event.target.value));
  //     setFiltered(false);
  //     setOrder(true);
  //     setCurrentPage(1);
  //   }
  // };

  // return (
  //   <div className={style.container}>
  //     <div>
  //       <div>
  //         <div className={style.selectFilters}>
  //           <select className={style.select} onChange={filterOrd} name="" id="">
  //             <option defaultChecked value="0">
  //               Alfabetico
  //             </option>
  //             <option value="asc">A-Z</option>
  //             <option value="desc">Z-A</option>
  //           </select>

  //           <select onChange={getTypeFilter}>
  //             <option value={"select"}>Tipos</option>
  //             {types.map((type, index) => (
  //               <option key={index} value={type.name}>
  //                 {type}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //             {filtered ? (
  //               <Container 
  //                 allPokemons={pokemonsFiltered}
  //                 lastIndex={lastIndex}
  //                 firstIndex={firstIndex}
  //               />
  //             ) : order ? (
  //               <Container
  //                 allPokemons={pokemonsOrder}
  //                 lastIndex={lastIndex}
  //                 firstIndex={firstIndex}
  //               />
  //             ) : type ? (
  //               <Container
  //                 allPokemons={typeFilter}
  //                 lastIndex={lastIndex}
  //                 firstIndex={firstIndex}
  //               />
  //             ) : (
  //               <Container
  //                 allPokemons={allPokemons}
  //                 lastIndex={lastIndex}
  //                 firstIndex={firstIndex}
  //               />
  //             )}
  //             <Page
  //               order={order}
  //               type={type}
  //               setOrder={setOrder}
  //               setType={setType}
  //               filtered={filtered}
  //               pokemonsFiltered={pokemonsFiltered}
  //               currentPage={currentPage}
  //               pokemonPage={pokemonPage}
  //               totalPokemons={totalPokemons}
  //               setCurrentPage={setCurrentPage}
  //             />
  //       </div>
  //     </div>
  //   </div>
  // );
