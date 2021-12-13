import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoute from './routes/auth';
import appointmentsRoute, {
  appointmentResolveController,
} from './routes/appointments';
import testTypesRoute from './routes/test-types';
import { authenticateRole } from './middleware/auth-middleware';

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
app.use('/api/appointments', authenticateRole('client'), appointmentsRoute);
app.patch(
  '/api/appointments/resolve/:id',
  authenticateRole('employee'),
  appointmentResolveController,
);
app.use('/api/test-types', authenticateRole('employee'), testTypesRoute);

app.get('/', (_, res) => {
  res.send('Hi');
});

app.listen(5000, () => {
  console.log('UP');
});
