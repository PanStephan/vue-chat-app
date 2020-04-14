const { Router } = require('express')
const { getUsersMessages } = require('../controllers/messages.controller')
const passport = require('passport')

const router = Router()

// /api/messages
// passport.authenticate('jwt', {session: false})
router.post('/', passport.authenticate('jwt', { session: false }), getUsersMessages)

module.exports = router
