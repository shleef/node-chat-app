const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app)
const port = process.env.PORT || 3000;
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    })
});

server.listen(port, () => {
    console.log(`Server up on port ${port}`)
});

module.exports = app;