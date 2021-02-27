import { bcryptService } from 'common';
import { Secret } from 'secret/domain/model/secret';
import { SecretRepository } from 'secret/domain/model/secret.repository';
import { CreateSecret } from 'secret/application/create-secret/create-secret';

export class CreateSecretService {
  private readonly secretRepository: SecretRepository;

  constructor(secretRepository: SecretRepository) {
    this.secretRepository = secretRepository;
  }

  public async execute(data: CreateSecret): Promise<void> {
    const secret = Secret.create({
      id: data.id,
      body: data.body,
      password: data.password ? await bcryptService.hash(data.password) : null,
      expiresIn: data.expiresIn,
    });

    await this.secretRepository.save(secret);
  }
}
