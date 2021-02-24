const Users = require('../models/users');

const getUser = async (userId) => await Users.findOne({userId}).lean();

const getUsers = async (userBody) => await Users.find(userBody).lean();

const createUser = async (userQuery) => await Users.create(userQuery);

const updateUser = async (userId, userBody) => await Users.findOneAndUpdate(userId, userBody, { new: true });

const deleteUser = async (userId) => await Users.findOneAndDelete({userId});


module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};