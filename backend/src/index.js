import cors from 'cors';
import express from 'express';
import { PORT } from './config/ServerConfig.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.listen(PORT, () => {
  console.log('Server Running on Port ', PORT);
});

app.get('/ping', (req, res) => {
  res.json({msg:'Hello'})
})
