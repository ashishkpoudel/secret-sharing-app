export class CreateSecretCommand {
  public readonly id: string;
  public readonly body: string;
  public readonly password: string | null;
  public readonly expiresIn: string;

  constructor(props: Partial<CreateSecretCommand>) {
    Object.assign(this, props);
  }
}
