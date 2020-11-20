import { Response } from 'express';

export const index = (_req, res: Response) => {
  res.send('Health check passed');
};
