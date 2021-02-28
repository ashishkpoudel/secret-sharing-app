import express from 'express';
import { validateRequest } from 'common/infrastructure/express/middleware/validate-request';
import { SecretRequest } from 'secret/infrastructure/express/request/secret.request';
import * as secretController from 'secret/infrastructure/express/controller/secret.controller';

const secretRouter = express.Router();

secretRouter.post('/secrets', validateRequest(SecretRequest), secretController.postSecret);

export { secretRouter };
