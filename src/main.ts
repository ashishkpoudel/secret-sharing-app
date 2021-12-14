import app from 'app';
import appConfig from 'config/app';
import { db } from 'database';

// Verify db-connection

(async () => { 
  const result = await db.raw('SELECT CURRENT_DATE');
  console.log(result.rows[0]);
})();

app.listen(appConfig.port, () => {
  console.log(`App running.. on port: ${appConfig.port}`);
});
