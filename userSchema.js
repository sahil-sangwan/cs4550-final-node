const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String
}, {collection: "users"})
module.exports = userSchema;