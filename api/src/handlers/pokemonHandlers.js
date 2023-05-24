const {createPokemonDb, getPokemonDb} = require('../controllers/PokemonController.js');

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
            const response = await getPokemonDb(name);
           return res
            .status(200)
            .json(response);
        }
        const response = await getPokemonDb();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).send({error: error.message});
    }
}

const getPokemonIdHandler = (req, res) => {
    const {id} = req.params;
    res.status(200).send(`Este es el pokemon con id ${id}`);
}

module.exports = {
    getAllPokemonsHandler,
    getPokemonIdHandler,
    createPokemonHandler
}