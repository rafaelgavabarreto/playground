const catchAsync = require('../utils/catchAsync');
const userService = require('../services/users');

const getUser = catchAsync(async (req, res) => {
  let result = { status: 'success', code: 200 };
  try {
    result.data = await userService.getUser(req.params.userId);
  }
  catch (error) {
    result = { status: 'error', code: 400, data: error };
  }
  finally {
    return res.send(result);
  }
});

const getUsers = catchAsync(async (req, res) => {
  let result = { status: 'success', code: 200 };
  try {
    result.data = await userService.getUsers(req.query);
  }
  catch (error) {
    result = { status: 'error', code: 400, data: error };
  }
  finally {
    return res.send(result);
  }
});

const createUser = catchAsync(async (req, res) => {
  let result = { status: 'success', code: 200 };
  try {
    result.data = await userService.createUser(req.body);
  }
  catch (error) {
    result = { status: 'error', code: 400, data: error };
  }
  finally {
    return res.send(result);
  }
});

const updateUser = catchAsync(async (req, res) => {
  let result = { status: 'success', code: 200 };
  try {
    result.data = await userService.updateUser(req.params.userId,req.body);
  }
  catch (error) {
    result = { status: 'error', code: 400, data: error };
  }
  finally {
    return res.send(result);
  }
});

const deleteUser = catchAsync(async (req, res) => {
  let result = { status: 'success', code: 200 };
  try {
    result.data = await userService.deleteUser(req.params.userId);
  }
  catch (error) {
    result = { status: 'error', code: 400, data: error };
  }
  finally {
    return res.send(result);
  }
});

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};