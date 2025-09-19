import cors from 'cors';
import express from 'express';
import { PORT } from './config/ServerConfig.js';
import apiRouter from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log('Server Running on Port ', PORT);
});


