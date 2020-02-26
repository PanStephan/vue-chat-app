const User = require('../models/user.model')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const keys = require('../keys')

module.exports.signIn = async (req, res) => {
  try {
    const candidate = await User.findOne({ login: req.body.login })

    if (candidate) {
      const isPasswordCorrect = bcrypt.compareSync(req.body.password, candidate.password)

      if (isPasswordCorrect) {
        const token = jwt.sign(
          {
            login: candidate.login,
            userId: candidate._id,
          },
          keys.JWT,
          { expiresIn: 60 * 60 },
        )
        res.json({ token, id: candidate._id, profile: candidate.profile })
      } else {
        res.status(401).json({ message: 'Пароль неверен' })
      }
    } else {
      res.status(404).json({ message: 'Пользователь не найден' })
    }
  } catch (e) {
    res.status(500).send()
  }
}

module.exports.signUp = async (req, res) => {
  try {
    const candidate = await User.findOne({ login: req.body.login })
    if (candidate) {
      res.status(409).json({ message: 'Такой login уже занят' })
    } else {
      const salt = bcrypt.genSaltSync(10)
      const user = new User({
        login: req.body.login,
        password: bcrypt.hashSync(req.body.password, salt),
        profile: {},
      })

      await user.save()
      res.status(201).json(user)
    }
  } catch (e) {
    res.status(500).send()
  }
}
