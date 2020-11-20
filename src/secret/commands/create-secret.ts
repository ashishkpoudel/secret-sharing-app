import { getRepository } from 'typeorm';
import { SecretEntity } from 'secret/entities/secret.entity';
import { bcryptService } from 'core/services/bcrypt.service';

export const createSecret = async (props: any): Promise<void> => {
  const bcrypt = bcryptService();

  await getRepository(SecretEntity)
    .save({
      id: props.id,
      body: props.body,
      password: await bcrypt.hash(props.password),
      expiresIn: props.expiresIn,
    });
};
