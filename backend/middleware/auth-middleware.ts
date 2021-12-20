import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticatedRequest } from '../types/request';

export const authenticateRole =
  (userRole: 'client' | 'employee' | 'admin'): RequestHandler =>
  (req: AuthenticatedRequest, res, next) => {
    const { access } = req.cookies as { [key: string]: string };

    if (access) {
      jwt.verify(access, process.env.JWT_SECRET!, (err, payload) => {
        if (err) return res.status(403).json({ message: 'Token is not valid' });

        const { uid, role } = <{ uid: string; role: string }>payload;

        if (role !== userRole)
          return res
            .status(403)
            .json({ message: 'Role forbidden to do this operation' });

        req.user = { uid, role };

        next();
      });
    } else {
      return res.status(401).json({ message: 'Auth token is not supplied' });
    }
  };
