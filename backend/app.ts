import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoute from './routes/auth';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(helmet());

mongoose.connect(process.env.MONGODB_CONN_STRING!, (_) =>
  console.log('Connected to MongoDB'),
);

app.use('/api/auth', authRoute);

app.get('/', (_, res) => {
  res.send('Hi');
});

app.listen(5000, () => {
  console.log('UP');
});
