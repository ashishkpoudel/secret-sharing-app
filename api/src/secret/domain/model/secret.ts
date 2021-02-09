import { URL } from 'url';

export class Secret {
  public readonly id: string;
  public readonly body: string;
  public readonly password: string | null;
  public readonly expiresIn: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(props: Partial<Secret>) {
    Object.assign(this, props);
  }

  getSharingLink(baseUrl: string): string {
    return new URL(`/secrets/${this.id}`, baseUrl).toString();
  }
}
