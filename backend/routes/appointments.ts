import { Router } from 'express';
import Appointment from '../models/Appointment';
import { AuthenticatedRequest } from '../types/request';
import { postValidation } from './validation/appointments.validation';

const router = Router();

router.post('/', async (req: AuthenticatedRequest, res) => {
  const { error } = (await postValidation()).validate(req.body);

  if (error) return res.status(400).json({ error: error.message });

  const { date, type } = req.body;

  const appointment = new Appointment({
    date,
    type,
    userId: req.uid,
  });

  await appointment.save();

  return res.status(200);
});

export default router;
