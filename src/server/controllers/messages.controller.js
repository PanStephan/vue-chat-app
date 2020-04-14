const User = require('../models/user.model')
const Messages = require('../models/messages.model')

module.exports.getUsersMessages = async (req, res) => {
  try {
    const { profileId, userId } = req.body

    const profile = await User.findById(profileId)
    const user = await User.findById(userId)

    res.status(201).send({ profileMessages: profile.messages, userMessages: user.messages })
  } catch (e) {
    res.status(500).send()
  }
}
