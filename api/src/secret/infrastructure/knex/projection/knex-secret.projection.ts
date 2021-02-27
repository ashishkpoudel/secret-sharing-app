import { db } from 'database';
import app from 'app';
import { SecretCreated } from 'secret/domain/model/secret-created';

app.get('domainMessenger').listen('SecretCreated', async (event: SecretCreated) => {
  const { secret } = event;
  await db('secrets').insert({
    id: secret.id,
    body: secret.body,
    password: secret.password,
    expiresIn: secret.expiresIn,
    createdAt: secret.createdAt.toISOString(),
    updatedAt: secret.updatedAt.toISOString()
  });
});
