import { db } from 'database';
import { v4 as uuid4 } from 'uuid';

export const createSecret = async () => {
  await db('secrets').insert({
    id: uuid4(),
    body: 'new secret',
    expiresIn: '03:02:01',
  });
}
