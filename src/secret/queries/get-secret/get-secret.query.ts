import { Secret } from 'secret/queries/get-secret/secret';

export class GetSecretQuery {
  async byId(id: string): Promise<Secret> {
    return new Secret({
      id,
      body: 'secret body goes here',
      expiresIn: { hours: 3, minutes: 2, seconds: 1 },
    });
  }
}
