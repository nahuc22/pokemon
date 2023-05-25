const {createPokemonDb, getAllPokemons, getPokemonById} = require('../controllers/PokemonController.js');

// ---> pokemon/?name=pikachu&vida=100
const createPokemonHandler = async (req, res) => { 
    const { name, life , attack , defense , weight} = req.body;
    try {
        const response = await createPokemonDb(name, life , attack, defense , weight);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
const getAllPokemonsHandler = async( req  , res) => {
    const { name } = req.query;
    try {
        if( name ) {
            const response = await getAllPokemons(name);
           return res
            .status(200)
            .json(response);
        }
        const response = await getAllPokemons();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).send({error: error.message});
    }
}

const getPokemonIdHandler = async (req, res) => {
    const {id} = req.params;
    try {
        const response = await getPokemonById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

module.exports = {
    getAllPokemonsHandler,
    getPokemonIdHandler,
    createPokemonHandler
}