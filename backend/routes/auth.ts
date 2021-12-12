import { Router } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';

const router = Router();

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({
    name: username,
    email,
    password: bcrypt.hashSync(password, 8),
    role: 'client',
  });

  await newUser.save();

  res.status(200).json({
    success: true,
  });
});

export default router;
