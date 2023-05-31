const {Router} = require('express');
const {getAllPokemonsHandler , getPokemonIdHandler , createPokemonHandler} = require('../handlers/pokemonHandlers');

const pokemonRouter = Router();

pokemonRouter.get("/", getAllPokemonsHandler);
pokemonRouter.get('/:id', getPokemonIdHandler);
pokemonRouter.post('/', createPokemonHandler);

module.exports = pokemonRouter;