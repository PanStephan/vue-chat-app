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
