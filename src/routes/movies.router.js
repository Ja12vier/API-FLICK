const { getAll, create, getOne, remove, update, setmoviesgenres, setmoviesactors, setmoviesdirectors } = require('../controllers/movies.controllers');
const express = require('express');

const moviesRouter = express.Router();

moviesRouter.route('/')
    .get(getAll)
    .post(create);

moviesRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

moviesRouter.route('/:id/genres')
.post(setmoviesgenres);

moviesRouter.route('/:id/actors')
.post(setmoviesactors);

moviesRouter.route('/:id/directors')
.post(setmoviesdirectors);

module.exports = moviesRouter;