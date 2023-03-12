const { DataTypes } = require('sequelize')

const sequelize = require('../utils/connection')
 // En Mayúsculas y singular      // en minúsculas y singular
const Movies = sequelize.define('movies', {
// Definimos las columnas aquí
name: {
type: DataTypes.STRING,
allowNull: false 
},
image: {
  type: DataTypes.TEXT,
  allowNull: false 
  },

sinopsis: {
  type: DataTypes.STRING,
  allowNull: false 
    },

releaseYear: {
  type: DataTypes.DATEONLY,
  allowNull: false 
   },    
});
module.exports = Movies;
