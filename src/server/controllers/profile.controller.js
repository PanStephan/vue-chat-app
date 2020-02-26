const User = require('../models/user.model')

module.exports.getProfileData = async (req, res) => {
  try {
    const profile = await User.findOne({ login: req.body.login })
    if (profile) {
      res.send(profile.profile)
    }
  } catch (e) {
    res.status(500).send()
  }
}
