import { getRepository } from 'typeorm';
import { SecretEntity } from 'secret/entities/secret.entity';

export const createSecret = async (props: any): Promise<void> => {
  await getRepository(SecretEntity)
    .save({
      id: props.id,
      body: props.body,
    });
};
