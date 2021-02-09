import { bcryptService } from 'common';
import { Secret } from 'secret/domain/model/secret';
import { SecretRepository } from 'secret/domain/repository/secret.repository';
import { CreateSecretCommand } from 'secret/application/create-secret/create-secret.command';

export class CreateSecretService {
  constructor(
    private readonly secretRepository: SecretRepository,
  ) { }

  public async execute(data: CreateSecretCommand): Promise<void> {
    const secret = new Secret({
      id: data.id,
      body: data.body,
      password: data.password
        ? await bcryptService.hash(data.password)
        : null,
      expiresIn: data.expiresIn,
    });

    await this.secretRepository.save(secret);
  }
}
