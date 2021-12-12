import { Router } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';
import { signUpSchema } from './validation/auth.validation';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/signup', async (req, res) => {
  // Validate body
  const { error } = signUpSchema.validate(req.body);

  if (error) return res.status(400).json({ error: error.message });

  const { name, email, password } = req.body;

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
  return res.status(200).json({
    success: true,
  });
});

router.post('/login', async (req, res) => {
  // Validate body
  const { error } = signUpSchema.validate(req.body);

  if (error) return res.status(400).json({ error: error.message });

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ error: 'User not found' });

  const isPasswordValid = await bcrypt.compare(
    password,
    user.password.toString(),
  );

  if (!isPasswordValid)
    return res.status(400).json({ error: 'Password is invalid' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
    expiresIn: '24h',
  });
});

export default router;
