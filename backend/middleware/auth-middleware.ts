import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticatedRequest } from '../types/request';

const authenticateJWT: RequestHandler = (
  req: AuthenticatedRequest,
  res,
  next,
) => {
  const { authorization } = req.headers;

  if (authorization) {
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET!, (err, uid) => {
      if (err) return res.status(403).json({ message: 'Token is not valid' });

      req.uid = `${uid}`;

      next();
    });
  } else {
    return res.status(401).json({ message: 'Auth token is not supplied' });
  }
};
