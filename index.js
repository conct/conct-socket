const io = require('socket.io-client'
)
const socket = io.connect('http://conct.de:62751', { transports:['websocket'] })

module.exports = socket;