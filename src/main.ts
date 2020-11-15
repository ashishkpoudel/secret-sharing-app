import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import handlebars from 'express-handlebars';

import appConfig from './config/app';
import * as healthCheckController from './controllers/health-check.controller';
import * as homeController from './controllers/home.controller';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
dotenv.config();

/**
 * App routes.
 */
app.get('/health-check', healthCheckController.index);
app.get('/', homeController.index);

app.listen(appConfig.port, () => {
  console.log(`running on port: ${appConfig.port}`);
});
