const Actors = require("./Actors");
const Directors = require("./Directors");
const Genres = require("./Genres");
const Movies = require("./Movies");




Genres.belongsToMany(Actors, {through: "genresActors"})


Genres.belongsToMany(Directors, {through: "genresDirector"})


Genres.belongsToMany(Movies, {through: "genresMovies"} )
Movies.belongsToMany(Genres, {through: "genresMovies"})

Movies.belongsToMany(Actors, {through: "moviesActors"})
Actors.belongsToMany(Movies, {through: "moviesActors"})


Movies.belongsToMany(Directors, {through: "moviesDirectors"})
Directors.belongsToMany(Movies, {through: "moviesDirectors"})

