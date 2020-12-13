import { dbConnection } from 'database';
import app from 'app';

export default app.listen(1234, async () => {
  await dbConnection();
});
