const Joi = require("@hapi/joi");
const ErrorHandler = require('../errors/ErrorHandler');
const validateObjectId = require('../helpers/validateObjectId');
const {
  UserModel
} = require('./user_model')


async function getUsers(username) {
  return await UserModel.find({}).select('username firstname lastname');
}

function validateUserId(userId) {
  validateObjectId(userId)
}

async function deleteUser(userId) {

  const user = await UserModel.findOneAndRemove({
    _id: userId
  })

  if (!user)
    throw new ErrorHandler(404, {
      message: "The user with thie given id not found ."
    })

  return undefined
}


module.exports.getUsers = getUsers;
module.exports.validateUserId = validateUserId;
module.exports.deleteUser = deleteUser;
