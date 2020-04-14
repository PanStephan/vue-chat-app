const { Schema, model } = require('mongoose')

const messagesSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  messages: {
    type: Array,
    required: false,
  },
})

module.exports = model('messages', messagesSchema)
