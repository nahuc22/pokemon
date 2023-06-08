import axios from 'axios';

// Actions - types
export const GET_POKEMONS = "GET_POKEMONS";
export const POST_POKEMON = "POST_POKEMON";
export const FILTERS = "FILTERS"
export const GET_BY_NAME ="GET_BY_NAME"
export const GET_BY_ID = "GET_BY_ID"
export const GET_TYPES = "GET_TYPES"
export const TYPE_FILTER = "TYPE_FILTER"

// ACTIONS 
export function getPokemons() {
    return async function(dispatch) {
        try {
            const pokemons = await axios.get('http://localhost:3001/pokemons');
        dispatch({
            type: GET_POKEMONS,
            payload: pokemons.data
        })
        } catch (error) {
            alert('No se pudo obtener los pokemons');
        }
        
    }
}

export function getPokemonByName(name) {
    return async function (dispatch) {
        try {
            const pokemon = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            dispatch({
                type: GET_BY_NAME,
                payload: pokemon.data
            })
            
        } catch (error) {
            return alert('El pokemon no existe');   
        }
    }
}

export function getPokemonbyId(id) {
 try {
    return async function (dispatch) {
        console.log(id)
        const pokemon = await axios.get(`http://localhost:3001/pokemons/${id}`);
        dispatch({
            type: GET_BY_ID,
            payload: pokemon.data
        })
    }
 } catch (error) {
    console.log(error);
 }
    
}

export function postPokemon(info) {
    return async function(dispatch) {
        try {
            const pokemon = await axios.post('http://localhost:3001/pokemons', info);
            console.log(pokemon)
            return dispatch({
                    type: POST_POKEMON,
                    payload: pokemon.data}
                    )
        } catch (error) {
            alert("No se pudo crear el pokemon, ya existe en la base de datos")
            console.log(error)
        }
    }   
}

export function getType(){
    return async function(dispatch) {
        try {
            const pokemon = await axios.get('http://localhost:3001/types');
            console.log(pokemon.data)
            dispatch({
                type: GET_TYPES,
                payload: pokemon.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getPokemonTypeFilters(type){
    return function(dispatch){
        return dispatch({
            type: TYPE_FILTER,
            payload: type
        })
    }  
}

export function filter(orden){
    return function(dispatch){
        return dispatch({
            type: FILTERS,
            payload: orden
        })  
    }
}