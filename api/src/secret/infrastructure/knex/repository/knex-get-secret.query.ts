import { db } from 'database';
import { GetSecretQuery } from 'secret/application/get-secret/get-secret.query';
import { Secret } from 'secret/application/get-secret/secret';
import { SecretNotFound } from 'secret/domain/model/secret-not-found';

export class KnexGetSecretQuery implements GetSecretQuery {
  async byId(id: string): Promise<Secret> {
    const secret = await db('secrets').where({ id }).first();

    if (!secret) {
      throw new SecretNotFound('Secret not found');
    }

    return new Secret({
      id: secret.id,
      body: secret.body,
      expiresIn: secret.expiresIn,
    });
  }
}
