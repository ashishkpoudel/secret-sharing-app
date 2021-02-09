import { TypeormGetSecretRepository } from 'secret/infrastructure/typeorm/repository/typeorm-get-secret.repository';

const getSecret = new TypeormGetSecretRepository();

export { getSecret };
