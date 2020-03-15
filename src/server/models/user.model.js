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
  conversations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'profile',
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'profile',
    },
  ],
})

module.exports = model('users', userSchema)
