const socket = require('socket.io-client')('http://conct.de:62751', { transports:['websocket'] })

module.exports = socket;