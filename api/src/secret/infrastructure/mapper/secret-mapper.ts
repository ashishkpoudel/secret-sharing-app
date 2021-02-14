import { Secret as SecretModel } from 'secret/domain/model/secret';

export class SecretMapper {
  public static toDomain(raw: any): SecretModel {
    return SecretModel.fromState({
      id: raw.id,
      body: raw.body,
      password: raw.password,
      expiresIn: raw.expiresIn,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }

  public static toPersistence(secret: SecretModel): object {
    return {
      id: secret.id,
      body: secret.body,
      password: secret.password,
      expiresIn: secret.expiresIn,
      createdAt: secret.createdAt,
      updatedAt: secret.updatedAt,
    };
  }
}
