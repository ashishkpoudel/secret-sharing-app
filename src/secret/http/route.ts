import express from 'express'
import * as secretController from 'secret/http/controller/secret.controller';

const secretRouter = express.Router();

secretRouter.post('/secrets', secretController.postSecret);

export { secretRouter };
