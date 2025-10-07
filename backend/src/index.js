import cors from 'cors';
import express from 'express';
import { PORT } from './config/ServerConfig.js';
import apiRouter from './routes/index.js';
import { Server } from 'socket.io';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/api', apiRouter);
io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(PORT, () => {
  console.log('Server Running on Port ', PORT);
});
