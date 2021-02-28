import { Request, Response } from 'express';
import { v4 as uuid4 } from 'uuid';
import { createSecretService } from 'catalog/secret/application/create-secret';
import { CreateSecret } from 'catalog/secret/application/create-secret/create-secret';
import { getSecret } from 'catalog/secret/application';

export const postSecret = async (req: Request, res: Response) => {
  const id = uuid4();
  const command = new CreateSecret({
    id,
    body: 'this is a body',
    password: 'secretSauce',
    expiresIn: '03:02:01',
  });

  await createSecretService.execute(command);

  const secret = await getSecret.byId(id);
  res.json(secret);
};
