import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  uid?: string;
}
