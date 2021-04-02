import { Request, Response } from 'express';
import { v4 as uuid4 } from 'uuid';
import { createSecretService } from 'secret/application/create-secret';
import { CreateSecret } from 'secret/application/create-secret/create-secret';
import { getSecret } from 'secret/application';

export const postSecret = async (request: Request, response: Response) => {
  const id = uuid4();
  const { body } = request;

  const command = new CreateSecret({
    id,
    body: body.body,
    password: body.password,
    expiresIn: body.expiresIn,
  });

  await createSecretService.execute(command);

  const secret = await getSecret.byId(id);
  response.json(secret);
};
