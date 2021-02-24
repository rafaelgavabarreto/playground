const FriendType = require('../models/userFriendType');


const getTypes = async (userBody) => await FriendType.find(userBody).lean();

const addType = async (userQuery) => await FriendType.create(userQuery);

const updateType = async (id, userBody) => await FriendType.findOneAndUpdate(id, userBody, { new: true });

const deleteType = async (id) => await FriendType.findOneAndDelete({id});


module.exports = {
  getTypes,
  addType,
  updateType,
  deleteType,
};