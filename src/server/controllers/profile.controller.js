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
    const profile = await User.find({ login: req.body.login })
    if (profile.length === 0) res.status(404).send()
    console.log(profile)
    res.status(201).send()
  } catch (e) {
    res.status(500).send()
  }
}
