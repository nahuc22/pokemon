const axios = require("axios");
const { Type } = require("../db.js");

const getTypes = async () => {
    let types = await Type.findAll();
  
    if (types.length === 0) {
      const response = await axios.get(`https://pokeapi.co/api/v2/type`);
      const typeApi = response.data.results;
      
      types = await axios.all(
        typeApi.map(async (type) => {
          const response = await axios.get(type.url);
          const id = response.data.id; // Agregar la obtención del ID del tipo
          const name = response.data.name;
          console.log(name)
          return { id, name }; // Incluir el ID del tipo en el objeto retornado
        })
      );
      await Type.bulkCreate(types);
    }
    const arrTypes = types.map((type) => type.name);
    return arrTypes;
  };

  module.exports = getTypes