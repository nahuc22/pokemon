const {createPokemonDb, getAllPokemons, getPokemonById, getPokemonByName} = require('../controllers/PokemonController.js');

// ---> pokemon/?name=pikachu&vida=100
const createPokemonHandler = async (req, res) => { 
    const { name, img , life , attack , defense ,speed, height ,weight , type } 
    = req.body;
    try {
        if(attack < 0 || life < 0 || defense < 0 || speed < 0 || height < 0 || weight < 0){
         return  res.status(400).json({error: "The stats must be higher than 0"})
        }
        const newPokemon = await createPokemonDb(name, img , life , attack, defense ,speed , height , weight , type);
        res.status(200).json(newPokemon);
    } catch (error) {
        console.log({error: "No se pudo crear el pokemon"})
    }
}
const getAllPokemonsHandler = async( req  , res) => {
    const { name } = req.query;
    try {
        if( name ) {
            const response = await getPokemonByName(name);
           return res
            .status(200)
            .json(response);
        }
        const response = await getAllPokemons();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).send({error: 'No se encontró el Pokemon'});
    }
}

const getPokemonIdHandler = async (req, res) => {
    const { id } = req.params;
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