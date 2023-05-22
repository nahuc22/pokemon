const getTypeHandler = (req , res) => { 
    res.status(200).send("Se obtuvieron los tipos de pokemons")
}

module.exports = {
    getTypeHandler
}