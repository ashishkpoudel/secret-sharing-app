export class Secret {
  public readonly id: string;
  public readonly body: string;
  public readonly password: string | null;
  public readonly expiresIn: string;

  constructor(props: Partial<Secret>) {
    Object.assign(this, props);
  }
}
