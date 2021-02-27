import app from 'app';
import { db } from 'database';
import { SecretRepository } from 'secret/domain/model/secret.repository';
import { Secret } from 'secret/domain/model/secret';
import { SecretNotFound } from 'secret/domain/model/secret-not-found';

export class KnexSecretRepository implements SecretRepository {
  async getById(id: string): Promise<Secret> {
    const secret = await db('secrets').where({ id }).first();

    if (!secret) {
      throw new SecretNotFound('Secret not found');
    }

    return Secret.fromState({
      id: secret.id,
      body: secret.body,
      password: secret.password,
      expiresIn: secret.expiresIn,
      createdAt: secret.createdAt,
      updatedAt: secret.updatedAt,
    });
  }

  async save(secret: Secret): Promise<void> {
    for (let event of secret.releaseDomainEvents()) {
      await app.get('domainMessenger').publish(event);
    }
  }
}
