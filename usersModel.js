const mongoose = require('mongoose')
const usersSchema = require('./userSchema')
const userModel = mongoose.model(
    'UsersModel',
    usersSchema
)
module.exports = userModel