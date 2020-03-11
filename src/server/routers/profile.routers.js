const { Router } = require('express')
const { getUserData, addConversation } = require('../controllers/profile.controller')
const passport = require('passport')

const router = Router()

// /api/profile
// passport.authenticate('jwt', {session: false})
router.get('/info/:id', passport.authenticate('jwt', { session: false }), getUserData)

router.post('/new-conversation/', passport.authenticate('jwt', { session: false }), addConversation)

module.exports = router
