const { Schema, model } = require('mongoose')

const profileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  conversations: {
    type: String,
    required: false,
  },
})

module.exports = model('profile', profileSchema)
