"use strict";

const express = require('express');
const router = express.Router();

const friendController = require('../controllers/friends');
const friendTypeController = require('../controllers/friendType');

router
  .route('/:userId')
  .get(friendController.getFriends)
  .post(friendController.addFriend)
  .patch(friendController.updateFriend);

router
  .route('/type')
  .get(friendTypeController.getTypes)
  .post(friendTypeController.addType)
  .patch(friendTypeController.updateType)
  .delete(friendTypeController.deleteType);

  
module.exports = router;
