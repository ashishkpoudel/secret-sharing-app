import { Secret as SecretModel } from 'secret/domain/model/secret';
import { TypeormSecretEntity as SecretEntity } from 'secret/infrastructure/typeorm/entity/typeorm-secret.entity';

export class SecretMapper {
  public static toDomain(raw: any): SecretModel {
    return new SecretModel({
      id: raw.id,
      body: raw.body,
      password: raw.password,
      expiresIn: raw.expiresIn,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }

  public static toPersistence(secret: SecretModel): SecretEntity {
    return new SecretEntity({
      id: secret.id,
      body: secret.body,
      password: secret.password,
      expiresIn: secret.expiresIn,
      createdAt: secret.createdAt,
      updatedAt: secret.updatedAt,
    });
  }
}
