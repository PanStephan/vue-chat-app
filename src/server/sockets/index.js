const io = require('../server').io

io.on('connect', socket => {
  socket.on('userMessage', msg => {
    console.log(msg)
  })
})