import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoute, { signUpEmployeeController } from './routes/auth';
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

mongoose.connect(process.env.MONGODB_CONN_STRING!, (error) => {
  if (error) return console.log('🛑 Error connecting to MongoDB Atlas 🛑');
  console.log('🟢 Connected to MongoDB Atlas 🟢');
});

app.use('/api/auth', authRoute);
app.post(
  '/api/auth/signup/employee',
  authenticateRole('admin'),
  signUpEmployeeController,
);
app.patch(
  '/api/appointments/resolve/:id',
  authenticateRole('employee'),
  appointmentResolveController,
);
app.use('/api/appointments', authenticateRole('client'), appointmentsRoute);
app.use('/api/test-types', authenticateRole('employee'), testTypesRoute);

app.get('/', (_, res) => {
  res.send('Hi');
});

app.listen(process.env.PORT || 5000, () => {
  console.log('The server is up and running 🏎🏁 - url: http://localhost:5000');
});
