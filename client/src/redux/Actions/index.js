import axios from 'axios';

// Actions - types
export const GET_POKEMONS = "GET_POKEMONS";
export const POST_POKEMON = "POST_POKEMON";
export const FILTERS = "FILTERS"
export const GET_BY_NAME ="GET_BY_NAME"

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
            console.log(pokemon.data)
            dispatch({
                type: GET_BY_NAME,
                payload: pokemon.data
            })
            
        } catch (error) {
            alert('No se pudo obtener el pokemon');
        }
    }
}

export function postPokemon(info) {
    return async function(dispatch) {
        try {
            const pokemon = await axios.post('http://localhost:3001/pokemons', info);
            console.log(pokemon)
        } catch (error) {
            console.log(error)
        }
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