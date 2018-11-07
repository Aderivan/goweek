const express = require("express");

const TweetController = require("./controllers/TweetControlle");
const LikeController = require("./controllers/LikeControlle");
const routes = express.Router();

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);
routes.post('/likes/:id', LikeController.store);

module.exports = routes;

