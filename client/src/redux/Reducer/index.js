import { POST_POKEMON } from "../Actions";


let initialState = {
    allPokemons: []
}

function rootReducer (state = initialState, action)

{
    switch(action.type){
        case POST_POKEMON: 
            break;
        default:
            break;
    }
}

export default rootReducer;