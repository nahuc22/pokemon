// ---> pokemon/?name=pikachu&vida=100
const getAllPokemonsHandler = ( req  , res) => {
    const { name , life } = req.query;
    if( name || life) {
       return res
        .status(200)
        .send(`Estos son los pokemons con nombre ${name} y vida ${life}`);
    }
   return res.status(200).send("Todos los usuarios");
}

const getPokemonIdHandler = (req, res) => {
    const {id} = req.params;
    res.status(200).send(`Este es el pokemon con id ${id}`);
}

const createPokemonHandler = (req, res) => { 
    const { name, life , attack } = req.body;
    res.status(200)
    .send(`El pokemon ${name} ha sido creado con vida ${life} y ataque ${attack}`);
}
module.exports = {
    getAllPokemonsHandler,
    getPokemonIdHandler,
    createPokemonHandler
}