const { DataTypes } = require('sequelize')

const sequelize = require('../utils/connection')
 // En Mayúsculas y singular      // en minúsculas y singular
const Directors = sequelize.define('directors', {
// Definimos las columnas aquí
firstName: {
type: DataTypes.STRING,
allowNull: false 
},
lastName: {
  type: DataTypes.STRING,
  allowNull: false 
  },
nationality: {
  type: DataTypes.STRING,
  allowNull: false 
    },
   
image: {
  type: DataTypes.TEXT,
  allowNull: false 
    }, 

birthday: {
  type: DataTypes.DATEONLY,
  allowNull: false
}   
});
module.exports = Directors;
