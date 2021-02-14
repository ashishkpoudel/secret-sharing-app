import { KnexSecretRepository } from 'secret/infrastructure/knex/repository/knex-secret.repository';

const secretRepository = new KnexSecretRepository();

export { secretRepository };
