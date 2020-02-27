const { Router } = require('express')
const { signIn, signUp } = require('../controllers/auth.controller')

const router = Router()

// /api/auth
router.post('/sign_in', signIn)

// /api/auth/admin/create
// passport.authenticate('jwt', {session: false})
router.post('/sign_up', signUp)

module.exports = router
