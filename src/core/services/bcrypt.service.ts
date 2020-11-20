import * as bcrypt from 'bcrypt';

class BcryptService {
  private readonly SALT_ROUNDS = 5;

  hash(value: string): Promise<string> {
    return bcrypt.hash(value, this.SALT_ROUNDS);
  }
}

export const bcryptService = () => {
  return new BcryptService();
}
