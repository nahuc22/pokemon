import axios from "axios";

// TYPE
export const GET_POKEMONS = "GET_POKEMONS";
// ACTION
export function getPokemons() {
  return async function (dispatch) {
    try {
      const pokemons = await axios.get("pokemons");
      dispatch({
        type: GET_POKEMONS,
        payload: pokemons.data,
      });
    } catch (error) {
      alert("No se pudo obtener los pokemons");
    }
  };
}

// TYPE
export const GET_BY_NAME = "GET_BY_NAME";
// ACTION
export function getPokemonByName(name) {
  return async function (dispatch) {
    try {
      const pokemon = await axios.get(
        `pokemons?name=${name}`
      );
      dispatch({
        type: GET_BY_NAME,
        payload: pokemon.data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}
//TYPE
export const GET_BY_ID = "GET_BY_ID";
//ACTION
export function getPokemonbyId(id) {
  try {
    return async function (dispatch) {
      console.log(id);
      const pokemon = await axios.get(`pokemons/${id}`);
      dispatch({
        type: GET_BY_ID,
        payload: pokemon.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
}

//TYPE
export const POST_POKEMON = "POST_POKEMON";
//ACTION
export function postPokemon(info) {
  return async function (dispatch) {
    try {
      const pokemon = await axios.post("pokemons", info);
      if (pokemon) {
        return dispatch({
          type: POST_POKEMON,
          payload: pokemon.data,
        });
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}

//TYPE
export const GET_TYPES = "GET_TYPES";
//ACTION
export function getTypes() {
  return async function (dispatch) {
    try {
      const pokemon = await axios.get("types");
      dispatch({
        type: GET_TYPES,
        payload: pokemon.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
//TYPE
export const TYPE_FILTER = "TYPE_FILTER";
//ACTION
export function getPokemonTypeFilters(type) {
  return function (dispatch) {
    console.log(type);
    return dispatch({
      type: TYPE_FILTER,
      payload: type,
    });
  };
}
//TYPE
export const ORIGIN_FILTER = "ORIGIN_FILTER";
//ACTION
export const filterByOrigin = (source) => {
  return { type: ORIGIN_FILTER, payload: source };
};

//TYPE
export const ORDER_BY_ALPH = "ORDER_BY_ALPH";
//ACTION
export function orderByAZ(orden) {
  return function (dispatch) {
    return dispatch({
      type: ORDER_BY_ALPH,
      payload: orden,
    });
  };
}
//TYPE
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
//ACTION
export const orderByAttack = (attackLevel) => {
  return {
    type: ORDER_BY_ATTACK,
    payload: attackLevel,
  };
};
