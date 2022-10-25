const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    ID:{
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
      primaryKey: true,
      validate:{
        isAlpha: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flagImage:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        isUrl: true
      }
    },
    continent:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    capital:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: ['Capital not Found'],     //Problemas con algunos países que no tienen capital eje. ID HMD
      allowNull: false,
    },
    subregion:{
      type:DataTypes.STRING,
    },
    area:{
      type:DataTypes.DECIMAL,
      validate:{
        isDecimal: true,
      }
    },
    population:{
      type:DataTypes.BIGINT,
      validate:{
        isNumeric:true,
      }
    }

  });
};
