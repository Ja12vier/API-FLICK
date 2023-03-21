const sequelize = require('../utils/connection');
require("../models/Actors")
require("../models/Directors")
require("../models/Genres")
require("../models")
require("../models/Movies")

const main = async() => {
    try{
        await sequelize.sync({ force: true });
        // funciones de create...
        
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();