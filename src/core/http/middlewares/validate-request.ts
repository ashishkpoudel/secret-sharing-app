import { Request, RequestHandler } from 'express';
import { validateSync } from 'class-validator';
import { plainToClass } from 'class-transformer';

export const validateRequest = (requestClass: any): RequestHandler => {
  return (req: Request, res, next) => {
    const hydratedBody = plainToClass(
      requestClass,
      req.body,
      { excludeExtraneousValues: false }, // TODO: make excludeExtraneousValues: true work
    );

    const errors =  validateSync(hydratedBody);
    if (errors.length > 0) {
      next(errors);
    }

    req.body = hydratedBody;
    next();
  };
};
