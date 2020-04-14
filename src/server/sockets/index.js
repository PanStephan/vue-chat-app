const io = require('../server').io

io.on('connect', socket => {
  socket.on('userMessage', ({ from, msg }) => {
    console.log(from)
    console.log(msg)
    // io.of(`${from}`).on('connection', () => {
    //   console.log(msg)
    // })
  })
})