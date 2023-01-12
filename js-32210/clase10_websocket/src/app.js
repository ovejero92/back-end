import express from 'express'
import { Server } from 'socket.io'
import __dirname from './utils.js'

const app = express()
const httpServer = app.listen(8080, () => console.log('listening...'))
const socketServer = new Server(httpServer)

app.use(express.static(__dirname + '/public'))

socketServer.on('connection', socket => { // handshake

    console.log('New cliente');

    socket.on('message22', data => {
        console.log('SERVER: ', data);
    })

    socket.emit('msg_individual', 'este mensje, solo lo recibe el socket')
    socket.broadcast.emit('msg_resto','este mensaje lo ven todos menos el socket acutal')
    socketServer.emit('msg_all', 'este mensaje se envia a todos')
})