const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  login: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  profile: {
    type: Object,
    require: true,
  },
})

module.exports = model('users', userSchema)
