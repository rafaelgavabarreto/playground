const Friend = require('../models/userFriend');


const getFriends = async (userId, userQuery) => await Friend.find({ userId1: userId, ...userQuery}).lean();

const addFriend = async (userId, userBody) => await Friend.create({ userId1: userId, ...userBody});

const updateFriend = async (userId, userBody) => await Friend.findOneAndUpdate(userId, userBody, { new: true });

const deleteFriend = async (userId) => await Friend.findOneAndDelete({userId});


module.exports = {
  getFriends,
  addFriend,
  updateFriend,
  deleteFriend,
};