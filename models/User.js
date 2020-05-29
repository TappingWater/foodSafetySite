const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  email: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  farmname: {
    type: String
  },
  admin: {
    type: Boolean
  }
});

module.exports = User = mongoose.model("users", userSchema)
