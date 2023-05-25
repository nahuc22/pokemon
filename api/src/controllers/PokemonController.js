const { Op } = require('sequelize');
const { Pokemon } = require('../db.js');
const axios = require('axios');
const createPokemonDb =  async (name, life , attack , defense , weight) => {
    const newPokemon = await Pokemon.create({ name, life , attack , defense , weight });
    return newPokemon;
}

const getPokemonDb = async () => {
    const allPokemonDb = await Pokemon.findAll();
    return allPokemonDb;
}
const getPokemonApi = async () => {
    const peticion = "https://pokeapi.co/api/v2/pokemon?limit=10";
    const apiResult = await axios(peticion);
    const arrPokemon = apiResult.data.results;
    const arrResult = [];
    for(let i = 0; i < arrPokemon.length; i++){
        const endpoint = ("https://pokeapi.co/api/v2/pokemon/")
        const apiResult = await axios(endpoint + arrPokemon[i].name.toLowerCase());
        const obj = {
            id: apiResult.data.id,
            name: apiResult.data.name,
            img: apiResult.data.sprites.other.dream_world.front_default,
            life: apiResult.data.stats[0].base_stat,
            attack: apiResult.data.stats[1].base_stat,
            defense: apiResult.data.stats[2].base_stat,
            speed: apiResult.data.stats[5].base_stat,
            height: apiResult.data.height,
            weight: apiResult.data.weight,
            Types: apiResult.data.types.map((type) => type.type.name),
            source: 'api'
        }
        arrResult.push(obj);
    }
    return arrResult;
}




const getAllPokemons = async (name) => {
    // const pokemonDB = await getPokemonDb() // pokemon de la db
    // const pokemonApi = await getPokemonApi() // pokemon de la api
    // const allPokemon = [...pokemonDB, ...pokemonApi] // todos los pokemons
    const [pokemonDB, pokemonApi] = await Promise.all([getPokemonDb(), getPokemonApi()])
    const allPokemon = [...pokemonDB, ...pokemonApi]
    if(name) {
        let filterPokemon = allPokemon.filter( (pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
        if(filterPokemon.length){
            return filterPokemon
        }
    } else {
        return allPokemon;
    }
}

const getPokemonById = async (id) => {
    if(isNaN(id)){
        const pokemonById = await Pokemon.findByPk(id);
        return pokemonById;
    }
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log("POKEMON", pokemon)
    return pokemon;
}

//? POR ORDEN ASCENDENTE
// const getPokemonByOrderAsc = async () => {
//         const pokemonByOrderAsc = await Pokemon.findAll({
//             order: [["name", "ASC"]]
//             });
//         return pokemonByOrderAsc;
// }
//? POR COINCIDENCIA DE NOMBRE 
// const getPokemonDb = async (name) => {
//     if(name){
//         const pokemonByName = await Pokemon.findAll({
//             where: {
//                 name: { [Op.iLike]: `%${name}%`}
//             }});
//         return pokemonByName;
//     }
//     const allPokemons = await Pokemon.findAll();
//     return allPokemons
// }

module.exports = {
    createPokemonDb,
    getAllPokemons,
    getPokemonById
}