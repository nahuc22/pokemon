const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
      validate : {
        len: {
        args: [3, 15],
        msg: "El nombre debe tener entre 3 y 15 caracteres"
        }
      }
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true
    },
    life: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        isNumeric: {
          args: true,
          msg: "La vida debe ser un numero"
        }, 
      }
    },
    attack:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        isNumeric: {
          args: true,
          msg: "El ataque debe ser un numero"
        }, 
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        isNumeric: {
          args: true,
          msg: "La defensa debe ser un numero"
        }, 
      }
    },
    speed:{
      type: DataTypes.INTEGER,
      allowNull: true,     
      validate : {
        isNumeric: {
          args: true,
          msg: "La velocidad debe ser un numero"
        }, 
      }
    },
    height:{
      type: DataTypes.INTEGER,
      allowNull: true,
      validate : {
        isNumeric: {
          args: true,
          msg: "La altura debe ser un numero"
        }, 
      }
    },
    weight:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        isNumeric: {
          args: true,
          msg: "El peso debe ser un numero"
        }, 
      }
    }
  },
  {timestamps: false , freezeTableName: true} );
};
