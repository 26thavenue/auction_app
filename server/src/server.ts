import dotenv from 'dotenv'
import express from 'express'
import  { ClientToServerEvents,ServerToClientEvents,InterServerEvents,SocketData} from './utils/types'
import {Server,Socket} from 'socket.io'
import morgan from 'morgan'
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';


dotenv.config()

const PORT = 8080

const server = createServer()

const app = express()

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>();

app.use(morgan('tiny'))


app.get('/',(req,res)=>{
    res.send('Hello World')
})

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



