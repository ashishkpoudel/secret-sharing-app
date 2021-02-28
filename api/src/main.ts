import appConfig from 'config/app';
import { db } from 'database';
import app from 'app';

app.listen(appConfig.port, async () => {
  await db();
});
