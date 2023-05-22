const { Router } = require('express');
const pokemonRouter = require('./pokemonRouter.js');
const typeRouter = require('./typeRouter.js');

const router = Router();

router.use('/pokemons', pokemonRouter);
router.use('/types', typeRouter);

module.exports = router;
