import dotenv from 'dotenv'
import express from 'express'
import  { ClientToServerEvents,ServerToClientEvents,InterServerEvents,SocketData} from './utils/types'
import {Server,Socket} from 'socket.io'
import morgan from 'morgan'
dotenv.config()


const app = express()

app.use(morgan('tiny'))

const PORT = 8080

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
});



