import { Schema, model } from 'mongoose';

interface AppointmentSchema {
  userId: Schema.Types.ObjectId | string;
  date: Date;
  type: String;
  resolved: boolean;
  details: String;
}

const AppointmentSchema = new Schema<AppointmentSchema>({
  userId: { type: Schema.Types.ObjectId, required: true },
  date: { type: Schema.Types.Date, required: true },
  type: { type: Schema.Types.String, required: true },
  resolved: { type: Schema.Types.Boolean, default: false },
  details: { type: Schema.Types.String, default: 'Not resolved yet' },
});

export default model<AppointmentSchema>('Appointment', AppointmentSchema);
