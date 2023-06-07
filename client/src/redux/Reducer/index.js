import { POST_POKEMON , GET_POKEMONS, FILTERS, GET_BY_NAME , GET_BY_ID, GET_TYPES} from "../Actions";


let initialState = {
    allPokemons: [],
    pokemonsFiltered: [],
    pokemonsOrder: [],
    types: [],
    filters: false,
}

function rootReducer (state = initialState, action)

{
    switch(action.type){
        case GET_POKEMONS: 
            return {
                ...state,
                allPokemons: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                pokemonsFiltered: action.payload,
                filters: true
            }
        case GET_BY_ID:
            return {
                ...state,
                allPokemons: action.payload
            }
        case POST_POKEMON:
            return {
                ...state,
                allPokemons: action.payload
            }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case FILTERS:{
            if(action.payload === "asc"){
                return {
                    ...state,
                    filters: false,
                    pokemonsOrder: [...state.allPokemons].sort((a, b) => {
                        if(a.name > b.name) return 1
                        if(a.name < b.name) return -1
                        return 0         
                    })
                }
            }
            else if (action.payload === "desc"){
                return {
                    ...state,
                    filters: false,
                    pokemonsOrder: [...state.allPokemons].sort((a, b) => {
                        if(a.name > b.name) return -1
                        if(a.name < b.name) return 1; 
                        return 0;
                    })
                }
            }
        }
        default: return state;
    }
    
}

export default rootReducer;