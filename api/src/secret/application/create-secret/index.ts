import { secretRepository } from 'secret/domain';
import { CreateSecretService } from 'secret/application/create-secret/create-secret.service';

const createSecretService = new CreateSecretService(secretRepository);

export { createSecretService };
