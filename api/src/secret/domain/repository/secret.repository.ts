import { Secret } from 'secret/domain/model/secret';

export interface SecretRepository {
  readonly getById: (id: string) => Promise<Secret>;
  readonly save: (data: Secret) => Promise<void>;
}
