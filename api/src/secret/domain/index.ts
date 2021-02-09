import { TypeormSecretRepository } from 'secret/infrastructure/typeorm/repository/typeorm-secret.repository';

const secretRepository = new TypeormSecretRepository();

export { secretRepository };
