import { db } from 'database';
import { SecretRepository } from 'secret/domain/repository/secret.repository';
import { Secret } from 'secret/domain/model/secret';
import { SecretMapper } from 'secret/infrastructure/mapper/secret-mapper';
import { SecretNotFound } from 'secret/domain/exception/secret-not-found';

export class KnexSecretRepository implements SecretRepository {
  async getById(id: string): Promise<Secret> {
    const secret = await db('secrets').where({ id }).first();

    if (!secret) {
      throw new SecretNotFound('Secret not found');
    }

    return SecretMapper.toDomain(secret);
  }

  async save(secret: Secret): Promise<void> {
    const data = SecretMapper.toPersistence(secret);
    await db('secrets').insert(data);
  }
}
