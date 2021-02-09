import express from 'express';
import 'reflect-metadata';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { globalErrorHandler } from 'common/infrastructure/express/middleware/global-error-handler';
import { validationErrorHandler } from 'common/infrastructure/express/middleware/validation-error-handler';
import { commonRouter } from 'common/infrastructure/express/route';
import { secretRouter } from 'secret/infrastructure/express/route';

const app = express();

/**
 * Initial setup.
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config({ path: '.env' });

/**
 * App routes.
 */
app.use(commonRouter);
app.use(secretRouter);

/**
 * Register middlewares.
 */
app.use(validationErrorHandler);
app.use(globalErrorHandler);

export default app;
