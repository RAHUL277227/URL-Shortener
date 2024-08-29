const express = require('express');
const {createShortUrl,createNewUri} = require('../controllers/UrlControllers')

const routes = express.Router();

routes.post("/",createShortUrl);
routes.get("/:shortId",createNewUri);


module.exports = routes;