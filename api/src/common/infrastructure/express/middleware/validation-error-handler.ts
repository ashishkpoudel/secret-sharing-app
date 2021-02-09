import { NextFunction, Response } from 'express';
import { ValidationError } from 'class-validator';

export const validationErrorHandler = (err: Error, _req, res: Response, next: NextFunction) => {
  if (err[0] instanceof ValidationError) {
    res.status(422).json({ errors: err }).end();
  }

  next(err);
};
