const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const passport = require('passport')
// const passportStrategy = require('./middleware/passport-strategy')
const keys = require('./keys')

const app = express()

mongoose
  .connect(keys.MONGO_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(error => console.error(error))

// app.use(passport.initialize())
// passport.use(passportStrategy)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routers

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.listen(port, host, () => console.log(`Server listening on http://${host}:${port}`))
