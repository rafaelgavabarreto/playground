const catchAsync = require('../utils/catchAsync');
const friendService = require('../services/friends');

const getFriends = catchAsync(async (req, res) => {
  let result = { status: 'success', code: 200 };
  try {
    result.data = await friendService.getUsers(req.params.userId,req.query);
  }
  catch (error) {
    result = { status: 'error', code: 400, data: error };
  }
  finally {
    return res.send(result);
  }
});

const addFriend = catchAsync(async (req, res) => {
  let result = { status: 'success', code: 200 };
  try {
    result.data = await friendService.addFriend(req.params.userId,req.body);
  }
  catch (error) {
    result = { status: 'error', code: 400, data: error };
  }
  finally {
    return res.send(result);
  }
});

const updateFriend = catchAsync(async (req, res) => {
  let result = { status: 'success', code: 200 };
  try {
    result.data = await friendService.updateFriend(req.params.userId,req.body);
  }
  catch (error) {
    result = { status: 'error', code: 400, data: error };
  }
  finally {
    return res.send(result);
  }
});


module.exports = {
  getFriends,
  addFriend,
  updateFriend,
};
