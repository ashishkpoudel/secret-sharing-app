import { Request, Response } from 'express';
import { v4 as uuid4 } from 'uuid';
import { createSecret } from 'secret/commands/create-secret';
import { findSecretById } from 'secret/queries/find-secret-by-id';

export const postSecret = async (req: Request, res: Response) => {
  const id = uuid4();
  await createSecret({
    id: id,
    body: 'this is a body',
    password: 'this is my password',
    expiresIn: '3 hours 2 minutes 1 second',
  });

  const secret = await findSecretById(id);
  res.json(secret);
};
