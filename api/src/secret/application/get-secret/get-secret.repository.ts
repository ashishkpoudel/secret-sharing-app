export interface GetSecretRepository {
  readonly byId: (id: string) => Promise<any>;
}
