export interface GetSecretQuery {
  readonly byId: (id: string) => Promise<any>;
}
