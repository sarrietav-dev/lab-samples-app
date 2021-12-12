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
    name: String,
    email: String,
    password: String,
    role: String,
  }),
);


