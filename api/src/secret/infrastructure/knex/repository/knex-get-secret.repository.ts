import { db } from 'database';
import { GetSecretRepository } from 'secret/application/get-secret/get-secret.repository';
import { Secret } from 'secret/application/get-secret/secret';
import { SecretNotFound } from 'secret/domain/exception/secret-not-found';

export class KnexGetSecretRepository implements GetSecretRepository {
  async byId(id: string): Promise<Secret> {
    const secret = await db('secrets').where({ id }).first();

    if (!secret) {
      throw new SecretNotFound('Secret not found');
    }

    return new Secret({
      id: secret.id,
      body: secret.body,
      password: secret.password,
      expiresIn: secret.expiresIn,
    });
  }
}
