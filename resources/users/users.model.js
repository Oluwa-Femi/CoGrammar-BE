const mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    unique: true,
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 80,
  },
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
