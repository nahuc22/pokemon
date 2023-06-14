import { POST_POKEMON , GET_POKEMONS, ORDER_BY_ALPH, ORDER_BY_ATTACK, ORIGIN_FILTER, GET_BY_NAME , GET_BY_ID, GET_TYPES, TYPE_FILTER} from "../Actions";


const initialState = {
    pokemons: [],
    allPokemons: [],
    detail: {},
    types: [],
}

function rootReducer (state = initialState, action)
{
    switch (action.type) {
      case GET_POKEMONS:
        return {
          ...state,
          pokemons: action.payload,
          allPokemons: action.payload,
        };
      case GET_BY_NAME:
        return {
          ...state,
          pokemons: action.payload,
        };
      case GET_BY_ID:
        return {
          ...state,
          detail: {},
        };
      case POST_POKEMON:
        return {
          ...state,
          allPokemons: action.payload,
        };
      case GET_TYPES:
        return {
          ...state,
          types: action.payload,
        };
      case TYPE_FILTER:
        const type = action.payload; // este es el tipo que viene del evento
        const allPokemons = state.allPokemons; // tiene siempre todos los pokemons para tener disponibles todos los pokemosn siempre
        const filtered =
          type === "all"
            ? allPokemons
            : allPokemons.filter((pok) => pok.Types.includes(type));
        return { ...state, pokemons: filtered };
        case ORIGIN_FILTER:
          const allPokemons2 = state.allPokemons;
          const filtered2 =
          action.payload === "db"
            ? allPokemons2.filter((pok) => pok.source === "db")
            : allPokemons2.filter((pok) => pok.source === "api");
        return {
          ...state,
          pokemons: action.payload === "all" ? allPokemons2 : filtered2,
        };
      case ORDER_BY_ALPH:
        let orderedPok =
          action.payload === "asc"
            ? state.pokemons.sort(function (a, b) {
                if (a.name > b.name) return 1;
                if (b.name > a.name) return -1;
                return 0;
              })
            : state.pokemons.sort(function (a, b) {
                if (a.name > b.name) return -1;
                if (b.name > a.name) return 1;
                return 0;
              });
        return { ...state, pokemons: action.payload = orderedPok };
      case ORDER_BY_ATTACK:
        const order = action.payload;
        let orderedByAttack =
          order === "min"
            ? state.pokemons.sort((a, b) => a.attack - b.attack)
            : state.pokemons.sort((a, b) => b.attack - a.attack);

        return { ...state, pokemons: action.payload = orderedByAttack };
      default:
        return state;
    }
    
}

export default rootReducer;