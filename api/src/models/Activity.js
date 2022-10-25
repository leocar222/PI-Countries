const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty:{
        type:DataTypes.INTEGER,
        validate:{
            isNumeric:true,
        }        
    },
    duration:{
        type:DataTypes.DECIMAL, //en segundos
    },
    season:{
        type:DataTypes.ENUM,
        values:['Verano','Otoño','Invierno','Primavera']
    }
  });
};
