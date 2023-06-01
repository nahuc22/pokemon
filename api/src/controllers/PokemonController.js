const { Pokemon , Type } = require('../db.js');
const axios = require('axios');




const createPokemonDb =  async (name,img, hp , attack , defense , speed , weight, height, type) => {

        if (name && img && hp && attack && defense && speed && height && weight) {
            const pokemonCreated = await Pokemon.create({ name, img, hp, attack, defense, speed, height, weight });

            // Add the relation to its Types
            for (let index = 0; index < type.length; index++) {
                let typeObj = await Type.findOne({ where: {name: type[index]} });
                if (!typeObj)
                    console.log("post pokemon : type not found", type[index], typeObj, { where: {name: type[index]} });
                await pokemonCreated.addType(typeObj);
            }
            return pokemonCreated;
        } 
 }





const getPokemonDb = async () => {
    const allPokemonDb = await Pokemon.findAll(
        {
            attributes: ["id","img","name","attack","defense","speed","height","weight"],
            include : {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }   
        }
    }
    );
    return allPokemonDb;
}




const getPokemonApi = async () => {
    const peticion = "https://pokeapi.co/api/v2/pokemon?limit=50";
    const apiResult = await axios(peticion);
    const arrPokemon = apiResult.data.results;
    const arrResult = [];
    for(let i = 0; i < arrPokemon.length; i++){
        const endpoint = ("https://pokeapi.co/api/v2/pokemon/")
        const pokemon = await axios(endpoint + arrPokemon[i].name.toLowerCase());
        const obj = {
            id: pokemon.data.id,
            name: pokemon.data.name,
            img: pokemon.data.sprites.other.dream_world.front_default,
            life: pokemon.data.stats[0].base_stat,
            attack: pokemon.data.stats[1].base_stat,
            defense: pokemon.data.stats[2].base_stat,
            speed: pokemon.data.stats[5].base_stat,
            height: pokemon.data.height,
            weight: pokemon.data.weight,
            Types: pokemon.data.types.map((type) => type.type.name),
            source: 'api'
        }
        arrResult.push(obj);
    }
    return arrResult;
}




const getAllPokemons = async (name) => {
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
    const arrPokemonId = [];
    if(isNaN(id)){
        const pokemonById = await Pokemon.findByPk(id, {
            include: {
                model: Type,
                attributes: ['name'],
            }
        });
        return pokemonById;
    }
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const obj = {
            id: pokemon.data.id,
            name: pokemon.data.name,
            img: pokemon.data.sprites.other.dream_world.front_default,
            life: pokemon.data.stats[0].base_stat,
            attack: pokemon.data.stats[1].base_stat,
            defense: pokemon.data.stats[2].base_stat,
            speed: pokemon.data.stats[5].base_stat,
            height: pokemon.data.height,
            weight: pokemon.data.weight,
            Types: pokemon.data.types.map((type) => type.type.name),
            source: 'api'
        }
        arrPokemonId.push(obj);
    return arrPokemonId;
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