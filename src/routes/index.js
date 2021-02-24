"use strict";

const Express = require('express');
const router = Express.Router();


const usersRoute = require('./users');
router.use('/users', usersRoute);

const friendsRoute = require('./friends');
router.use('/friends', friendsRoute);


router.get('/health', function(req, res, next) {
  return res.status(200).json({'msg':'Hello world!'});
});


module.exports = router;