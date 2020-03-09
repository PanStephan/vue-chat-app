const User = require('../models/user.model')

module.exports.getProfileData = async (req, res) => {
  try {
    const profile = await User.findOne({ _id: req.params.id })
    if (profile) {
      res.send(profile)
    }
  } catch (e) {
    res.status(500).send()
  }
}

module.exports.addConversation = async (req, res) => {
  try {
    const addedUser = await User.findOne({ login: req.body.login })
    const user = await User.findById(req.body.userId)

    if (!addedUser) return res.status(404).send()

    user.conversations.push(addedUser.id)
    addedUser.conversations.push(user.id)

    user.save()
    addedUser.save()

    res.status(201).send()
  } catch (e) {
    res.status(500).send()
  }
}
