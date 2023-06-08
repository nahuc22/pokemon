import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import Container from "../../components/Container/Container";
import Page from "../../components/Page/Page";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  filter,
  getType,
  getPokemonTypeFilters,
} from "../../redux/Actions";
import loadingGif from "../../assets/loading.gif"
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);
  const pokemonsFiltered = useSelector((state) => state.pokemonsFiltered);
  const pokemonsOrder = useSelector((state) => state.pokemonsOrder);
  const types = useSelector((state) => state.types);
  const typeFilter = useSelector((state) => state.typeFilter);
  const filters = useSelector((state) => state.filters);

  const [order, setOrder] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pokemonPage, setPokemonPage] = useState(5);
  const [filtered, setFiltered] = useState(filters);
  const [type, setType] = useState(false);
  const [loading, setLoading] = useState(true); // Nuevo estado de carga

  const totalPokemons =
    allPokemons && allPokemons.length !== 0 ? allPokemons.length : 0;
  const lastIndex = currentPage * pokemonPage;
  const firstIndex = lastIndex - pokemonPage;

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  const getTypeFilter = (event) => {
    if (event.target.value !== "select") {
      dispatch(getPokemonTypeFilters(event.target.value));
      setType(true);
      setOrder(false);
      setFiltered(false)
    } else {
      setType(false);
      setOrder(false);
      setFiltered(false);
      setCurrentPage(1)
    }
  };

  useEffect(() => {
    if (allPokemons.length === 0) {
      dispatch(getPokemons());
    }
    dispatch(getType());
    setCurrentPage(1);
    setFiltered(false);
  }, []);

  const filterOrd = (event) => {
    if (event.target.value == "0") {
      dispatch(getPokemons());
      setFiltered(false);
      setOrder(false);
      setCurrentPage(1);
    } else {
      dispatch(filter(event.target.value));
      setFiltered(false);
      setOrder(true);
      setCurrentPage(1);
    }
  };

  return (
    <div className={style.container}>
      <div>
        <NavBar className={style.navContainer}
          setCurrentPage={setCurrentPage}
          setOrder={setOrder}
          searchString={searchString}
          onChange={handleChange}
          filtered={filtered}
          setFiltered={setFiltered}
          setType={setType}
        />
        <div>
          <div className={style.selectFilters}>
            <select className={style.select} onChange={filterOrd} name="" id="">
              <option defaultChecked value="0">
                Alfabetico
              </option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>

            <select onChange={getTypeFilter}>
              <option value={"select"}>Tipos</option>
              {types.map((type, index) => (
                <option key={index} value={type.name}>
                  {type}
                </option>
              ))}
            </select>
          </div>
              {filtered ? (
                <Container 
                  allPokemons={pokemonsFiltered}
                  lastIndex={lastIndex}
                  firstIndex={firstIndex}
                />
              ) : order ? (
                <Container
                  allPokemons={pokemonsOrder}
                  lastIndex={lastIndex}
                  firstIndex={firstIndex}
                />
              ) : type ? (
                <Container
                  allPokemons={typeFilter}
                  lastIndex={lastIndex}
                  firstIndex={firstIndex}
                />
              ) : (
                <Container
                  allPokemons={allPokemons}
                  lastIndex={lastIndex}
                  firstIndex={firstIndex}
                />
              )}
              <Page
                order={order}
                type={type}
                setOrder={setOrder}
                setType={setType}
                filtered={filtered}
                pokemonsFiltered={pokemonsFiltered}
                currentPage={currentPage}
                pokemonPage={pokemonPage}
                totalPokemons={totalPokemons}
                setCurrentPage={setCurrentPage}
              />
        </div>
      </div>
    </div>
  );
};

export default Home;
