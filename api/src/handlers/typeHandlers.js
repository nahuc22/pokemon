const getTypes = require("../controllers/TypeController");
const getTypeHandler = async(req , res) => { 
    try {
        const types = await getTypes();
        res.status(200).json(types)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    getTypeHandler
}