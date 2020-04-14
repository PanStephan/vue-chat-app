const User = require('../models/user.model')

module.exports.getUserData = async (req, res) => {
  try {
    const profile = await User.findOne({ _id: req.params.id })

    const conversations = await User.find({ _id: { $in: profile.conversations } })

    if (profile) {
      // TODO: dont send a password
      res.send({ profile, conversations })
    }
  } catch (e) {
    res.status(500).send()
  }
}

module.exports.addConversation = async (req, res) => {
  try {
    const addedUser = await User.findOne({ login: req.body.login })
    const user = await User.findById(req.body.userId)
    // TODO: check is user alredy added

    if (!addedUser) return res.status(404).send()

    user.conversations.push(addedUser._id)
    addedUser.conversations.push(user._id)

    user.save()
    addedUser.save()

    res.status(201).send()
  } catch (e) {
    res.status(500).send()
  }
}

module.exports.removeConversation = async (req, res) => {
  try {
    const removedUser = await User.findById(req.body.login)
    const user = await User.findById(req.body.userId)

    if (!removedUser) return res.status(404).send()

    removedUser.conversations = removedUser.conversations.filter(conversation => conversation.toString() !== user._id.toString())
    user.conversations = user.conversations.filter(conversation => conversation.toString() !== removedUser._id.toString())

    user.save()
    removedUser.save()

    res.status(201).send({conversations: user.conversations})
  } catch (e) {
    res.status(500).send()
  }
}
