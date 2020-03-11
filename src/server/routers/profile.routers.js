const { Router } = require('express')
const { getUserData, addConversation } = require('../controllers/profile.controller')
// const passport = require('passport')

const router = Router()

// /api/profile
// passport.authenticate('jwt', {session: false})
router.get('/info/:id', getUserData)

router.post('/new-conversation/', addConversation)

// router.post('/sign_up', passport.authenticate('jwt', {session: false}), signUp)

module.exports = router
