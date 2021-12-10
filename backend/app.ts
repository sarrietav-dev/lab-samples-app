import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hi');
});

app.listen(5000, () => {
  console.log('UP');
});
