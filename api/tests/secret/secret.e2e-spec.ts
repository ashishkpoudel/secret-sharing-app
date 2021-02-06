import request from 'supertest';
import { AppFactory } from '../factory/app';

describe('Secret e2e', () => {
  let app: AppFactory;

  beforeAll(async () => {
    app = await AppFactory.new();
  });

  afterEach(async () => {
    await app.refreshDatabase();
  });

  it('POST /secrets creates secret entry', async () => {
    await request(app.instance)
      .post(`/secrets`)
      .send({
        body: 'secret body goes here',
        password: 'secret',
        expiresIn: '3 hours 2 minutes 1 second',
      })
      .expect(200);
  });

  afterAll(async() => {
    await app.close();
  });
});
