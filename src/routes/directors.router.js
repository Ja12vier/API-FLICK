const { getAll, create, getOne, remove, update } = require('../controllers/directors.controllers');
const express = require('express');

const directorsRoute = express.Router();

directorsRoute.route('/')
    .get(getAll)
    .post(create);

directorsRoute.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = directorsRoute;