const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat message', (msg) => {
    /*
  Perbedaan io dan socket
    1. Socket -> digunakan ketika kita ingin mengirim acara ke user dia / socket sendiri
    2. Io -> digunakan ketika kita ingin mengirim acara ke semua user / socket
    3. Socket.broadcast -> digunakan ketika kita ingin mengirim acara ke semua orang kecuali socket / dia sendiri
  */
 
    io.emit('chat message', msg);
    // socket.emit('chat message, msg);
    // socket.broadcast.emit('chat message', msg);
  });

  socket.on('typing', (typing) => {
    io.emit('typing', typing);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});