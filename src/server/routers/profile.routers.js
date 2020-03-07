const { Router } = require('express')
const { getProfileData, addConversation } = require('../controllers/profile.controller')
// const passport = require('passport')

const router = Router()

// /api/profile
// passport.authenticate('jwt', {session: false})
router.get('/info/:id', getProfileData)

router.post('/new-conversation/', addConversation)

// router.post('/sign_up', passport.authenticate('jwt', {session: false}), signUp)

module.exports = router
