import { Schema, model } from 'mongoose';

const { Date, ObjectId, String } = Schema.Types;

const AppointmentSchema = new Schema({
  userId: ObjectId,
  date: Date,
  type: String,
});

export default model('Appointment', AppointmentSchema);
