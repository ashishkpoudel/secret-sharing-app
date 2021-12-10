import { CreateSecret } from 'secret/command/create-secret/create-secret';

export class CreateSecretService {
  public async execute(data: CreateSecret): Promise<void> {
    return Promise.resolve();
  }
}
