import axios from 'axios';

// Actions - types
export const GET_POKEMONS = "GET_POKEMONS";
export const POST_POKEMON = "POST_POKEMON";

// ACTIONS 
export function getPokemons() {
    return async function(dispatch) {
        try {
            const pokemons = await axios.get('http://localhost:3001/pokemons');
            console.log(pokemons)
        dispatch({
            type: GET_POKEMONS,
            payload: pokemons.data
        })
        } catch (error) {
            alert('No se pudo obtener los pokemons');
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