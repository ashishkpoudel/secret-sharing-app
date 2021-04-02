import interval from 'postgres-interval';

export class Secret {
  private _id: string;
  private _body: string;
  private _password: string | null;
  private _expiresIn: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  get id() {
    return this._id;
  }

  get body() {
    return this._body;
  }

  get password() {
    return this._password;
  }

  get expiresIn() {
    return this._expiresIn;
  }

  set expiresIn(value) {
    if (interval(value).toPostgres() === '0') {
      throw new Error(
        'Invalid interval supplied for expires in'
      );
    }

    this._expiresIn = value;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  public static create({ id, body, password, expiresIn }): Secret {
    const secret = new Secret();
    secret._id = id;
    secret._body = body;
    secret._password = password;
    secret.expiresIn = expiresIn;
    secret._createdAt = new Date();
    secret._updatedAt = new Date();
    return secret;
  }

  public static fromState({ id, body, password, expiresIn, createdAt, updatedAt }): Secret {
    const secret = new Secret();
    secret._id = id;
    secret._body = body;
    secret._password = password;
    secret.expiresIn = expiresIn;
    secret._createdAt = createdAt;
    secret._updatedAt = updatedAt;
    return secret;
  }

  public toState(): object {
    return {
      id: this.id,
      body: this.body,
      password: this.password,
      expiresIn: this.expiresIn,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
