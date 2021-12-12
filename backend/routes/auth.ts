import { Router } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';
import { signUpSchema } from './validation/auth.validation';

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

router.post('/login', async (req, res) => {});

export default router;
