const catchAsync = require('../utils/catchAsync');
const userService = require('../services/users');


const getTypes = catchAsync(async (req, res) => {
  let result = { status: 'success', code: 200 };
  try {
    result.data = await userService.getTypes(req.query);
  }
  catch (error) {
    result = { status: 'error', code: 400, data: error };
  }
  finally {
    return res.send(result);
  }
});

const addType = catchAsync(async (req, res) => {
  let result = { status: 'success', code: 200 };
  try {
    result.data = await userService.addType(req.body);
  }
  catch (error) {
    result = { status: 'error', code: 400, data: error };
  }
  finally {
    return res.send(result);
  }
});

const updateType = catchAsync(async (req, res) => {
  let result = { status: 'success', code: 200 };
  try {
    result.data = await userService.updateType(req.params.userId,req.body);
  }
  catch (error) {
    result = { status: 'error', code: 400, data: error };
  }
  finally {
    return res.send(result);
  }
});

const deleteType = catchAsync(async (req, res) => {
  let result = { status: 'success', code: 200 };
  try {
    result.data = await userService.deleteType(req.params.userId);
  }
  catch (error) {
    result = { status: 'error', code: 400, data: error };
  }
  finally {
    return res.send(result);
  }
});

module.exports = {
  getTypes,
  addType,
  updateType,
  deleteType,
};
