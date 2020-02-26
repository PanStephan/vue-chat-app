const { Router } = require('express')
const { getProfileData } = require('../controllers/profile.controller')
const passport = require('passport')

const router = Router()

// /api/profile
// passport.authenticate('jwt', {session: false})
router.post('/info', getProfileData)

// router.post('/sign_up', passport.authenticate('jwt', {session: false}), signUp)

module.exports = router
