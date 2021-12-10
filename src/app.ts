import express from 'express';
import 'reflect-metadata';
import dotenv from 'dotenv';

import { globalErrorHandler } from 'common/http/middleware/global-error-handler';
import { commonRouter } from 'common/http/route';
import { secretRouter } from 'secret/http/route';

const app = express();

/**
 * Initial setup.
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config({ path: '.env' });

/**
 * App routes.
 */
app.use(commonRouter);
app.use(secretRouter);

/**
 * Register middlewares.
 */
app.use(globalErrorHandler);

export default app;
