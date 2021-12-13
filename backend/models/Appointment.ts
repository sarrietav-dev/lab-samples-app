import { Schema, model } from 'mongoose';

interface AppointmentSchema {
  userId: string;
  date: Date;
  type: String;
  resolved: boolean;
  details: String;
}

const AppointmentSchema = new Schema<AppointmentSchema>({
  userId: Schema.Types.ObjectId,
  date: Schema.Types.Date,
  type: Schema.Types.String,
  resolved: Schema.Types.Boolean,
  details: Schema.Types.String,
});

export default model<AppointmentSchema>('Appointment', AppointmentSchema);
