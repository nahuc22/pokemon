const { Pokemon } = require('../db.js');
const createPokemonDb =  async (name, life , attack , defense , weight) => {
    const newPokemon = await Pokemon.create({ name, life , attack , defense , weight });
    return newPokemon;
}

const getPokemonDb = async (name) => {
    if(name){
        const pokemonByName = await Pokemon.findOne({where: {name}});
        return pokemonByName;
    }
    const allPokemons = await Pokemon.findAll();
    return allPokemons
}

module.exports = {
    createPokemonDb,
    getPokemonDb
}