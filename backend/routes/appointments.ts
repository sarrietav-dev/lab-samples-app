import { RequestHandler, Router } from 'express';
import Appointment from '../models/Appointment';
import TestType from '../models/TestType';
import { AuthenticatedRequest } from '../types/request';
import {
  postValidation,
  resolveValidation,
} from './validation/appointments.validation';

const router = Router();

router.get('/', async (req: AuthenticatedRequest, res) => {
  const userAppointments = await Appointment.find({ userId: req.user?.uid });

  res.status(200).json({ items: userAppointments });
});

router.post('/', async (req: AuthenticatedRequest, res) => {
  const { error } = (await postValidation()).validate(req.body);

  if (error) return res.status(400).json({ error: error.message });

  const {
    user,
    body: { date, type },
  } = req;

  const appointmentType = await TestType.findOne({ name: type });

  if (!appointmentType)
    return res
      .status(404)
      .json({ message: "A test type with the given name doesn't exist" });

  const appointment = new Appointment({
    date,
    type,
    userId: user?.uid,
  });

  await appointment.save();

  appointmentType.activeTests++;

  await appointmentType.save();

  res.status(201).send();
});

export default router;

export const appointmentResolveController: RequestHandler = async (
  req,
  res,
) => {
  const { error } = resolveValidation.validate(req.body);

  if (error) return res.status(400).json({ message: error.message });

  const appointment = await Appointment.findById(req.params.id);

  if (!appointment)
    return res.status(404).json({ message: 'The appointment was not found' });

  if (appointment.resolved)
    return res
      .status(403)
      .json({ message: 'The appointment was already resolved' });

  const type = await TestType.findOne({ name: appointment.type.toString() });

  appointment.details = req.body.details;
  appointment.resolved = true;
  await appointment.save();

  type!.activeTests--;
  await type!.save();

  res.status(204).json({ message: 'The appointment was resolved' });
};
