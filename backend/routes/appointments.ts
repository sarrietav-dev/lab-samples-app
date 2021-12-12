import { Router } from 'express';
import Appointment from '../models/Appointment';
import { AuthenticatedRequest } from '../types/request';
import { postValidation } from './validation/appointments.validation';

const router = Router();

router.post('/', async (req: AuthenticatedRequest, res) => {
  const { error } = (await postValidation()).validate(req.body);

  if (error) return res.status(400).json({ error: error.message });

  const {
    user,
    body: { date, type },
  } = req;

  if (!user) return res.status(403).json({ message: 'Not authenticated' });

  const appointment = new Appointment({
    date,
    type,
    userId: user.uid,
  });

  await appointment.save();

  res.status(200).send();
});

export default router;
