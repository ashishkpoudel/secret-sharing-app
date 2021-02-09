import { getRepository } from 'typeorm';
import { TypeormSecretEntity } from 'secret/infrastructure/typeorm/entity/typeorm-secret.entity';
import { GetSecretRepository } from 'secret/application/get-secret/get-secret.repository';
import { Secret } from 'secret/application/get-secret/secret';

export class TypeormGetSecretRepository implements GetSecretRepository {
  async byId(id: string): Promise<Secret> {
    const repository = getRepository(TypeormSecretEntity);
    const secret = await repository.findOneOrFail({ id });

    return new Secret({
      id: secret.id,
      body: secret.body,
      password: secret.password,
      expiresIn: secret.expiresIn,
    });
  }
}
