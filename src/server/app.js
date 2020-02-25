const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const passportStrategy = require('./middleware/passport-strategy')

const authRouters = require('./routers/auth.routers')
const keys = require('./keys')

const app = express()

mongoose
  .connect(keys.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(error => console.error(error))

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routers
app.use('/api/auth', authRouters)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))
