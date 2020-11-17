import { getRepository } from 'typeorm';
import { SecretEntity } from 'secret/entities/secret.entity';

export const getSecretById = async (id: string): Promise<SecretEntity | undefined> => {
  return getRepository(SecretEntity)
    .findOne({
      where: {
        id,
      },
    });
};
