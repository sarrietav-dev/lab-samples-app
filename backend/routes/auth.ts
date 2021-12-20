import { RequestHandler, Router } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';
import { logInSchema, signUpSchema } from './validation/auth.validation';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/signup', async (req, res) => {
  // Validate body
  const { error } = signUpSchema.validate(req.body);

  if (error) return res.status(400).json({ error: error.message });

  const { name, email, password } = req.body;

  const existingEmails = await User.find({ email });

  if (existingEmails)
    return res.status(409).json({ error: 'Email already exist' });

  // Create new User model
  const newUser = new User({
    name,
    email,
    // Encrypt the password
    password: bcrypt.hashSync(password, 8),
    role: 'client',
  });

  // Save the user to the database
  await newUser.save();

  // Send a success response.
  return res.status(204).send();
});

router.post('/login', async (req, res) => {
  // Validate body
  const { error } = logInSchema.validate(req.body);

  if (error) return res.status(400).json({ message: error.message });

  const { email, password } = req.body;

  // Get an user with the given email
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: 'User not found' });

  // Check if the given password is valid
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid)
    return res.status(403).json({ message: 'Password is invalid' });

  // Sign JWT to enable token authentication
  const token = jwt.sign(
    { uid: user.id, role: user.role },
    process.env.JWT_SECRET!,
    {
      expiresIn: '24h',
    },
  );

  res.cookie('access', token, {
    httpOnly: true,
    maxAge: 3600000,
    secure: process.env.NODE_ENV === 'production',
  });

  return res.sendStatus(200);
});

export default router;

export const signUpEmployeeController: RequestHandler = async (req, res) => {
  // Validate body
  const { error } = signUpSchema.validate(req.body);

  if (error) return res.status(400).json({ error: error.message });

  const { name, email, password } = req.body;

  const existingEmails = await User.find({ email });

  if (existingEmails)
    return res.status(409).json({ error: 'Email already exist' });

  // Create new User model
  const newUser = new User({
    name,
    email,
    // Encrypt the password
    password: bcrypt.hashSync(password, 8),
    role: 'employee',
  });

  // Save the user to the database
  await newUser.save();

  // Send a success response.
  return res.status(201).send();
};
