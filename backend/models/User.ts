import { Schema, model } from 'mongoose';

interface User {
  name: String;
  email: String;
  password: String;
  role: String;
}

export default model<User>(
  'User',
  new Schema<User>({
    name: {type: Schema.Types.String, required: true},
    email: {type: Schema.Types.String, required: true},
    password: {type: Schema.Types.String, required: true, select: false},
    role: {type: Schema.Types.String, required: true},
  }),
);


