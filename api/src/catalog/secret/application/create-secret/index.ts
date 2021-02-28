import { secretRepository } from 'catalog/secret/domain';
import { CreateSecretService } from 'catalog/secret/application/create-secret/create-secret.service';

const createSecretService = new CreateSecretService(secretRepository);

export { createSecretService };
