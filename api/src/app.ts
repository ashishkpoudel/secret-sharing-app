import express from 'express';
import 'reflect-metadata';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { globalErrorHandler } from 'common/infrastructure/express/middlewares/global-error-handler';
import { validateRequest } from 'common/infrastructure/express/middlewares/validate-request';
import { validationErrorHandler } from 'common/infrastructure/express/middlewares/validation-error-handler';
import * as healthCheckController from 'common/infrastructure/express/controllers/health-check.controller';
import * as secretController from 'secret/infrastructure/express/controllers/secret.controller';
import { SecretRequest } from 'secret/infrastructure/express/requests/secret.request';

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
app.get('/health-check', healthCheckController.index);
app.post('/secrets', validateRequest(SecretRequest), secretController.postSecret);

/**
 * Register middlewares.
 */
app.use(validationErrorHandler);
app.use(globalErrorHandler);

export default app;
